import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Row,
  Select,
  Space,
  Table,
  TablePaginationConfig,
  Typography,
  notification,
} from "antd";
import { useState } from "react";
import styles from "./index.module.css";
import { useMutation, useQuery } from "@apollo/client";
import {
  Customer_Bool_Exp,
  DeleteUserDocument,
  GetCustomerDocument,
  GetRoleDocument,
  InsertUserDocument,
  Role_Enum,
  UpdateUserDocument,
} from "../../../generated/graphql";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  DeleteTwoTone,
  EditTwoTone,
} from "@ant-design/icons";

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

type FieldType = {
  id?: number;
  name?: string;
  username?: string;
  password?: string;
  phone?: number;
  email?: string;
  remember?: string;
};

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: "number" | "text";
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const UserScreen: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: "1",
    size: "30",
    keyword: "",
  });
  const size = Number(searchParams.get("size") ?? "30");
  const page = Number(searchParams.get("page") ?? "1");
  const keyword = searchParams.get("keyword")?.trim();
  const selectRole = searchParams.get("role") ?? "ADMINISTRATOR";

  let where: Customer_Bool_Exp = {
    // deleted_at: { _is_null: true },
  };

  if (keyword !== null) {
    where = {
      ...where,
      _or: [
        { username: keyword !== "" ? { _ilike: `%${keyword}%` } : undefined },
        { name: keyword !== "" ? { _ilike: `%${keyword}%` } : undefined },
        { phone: keyword !== "" ? { _ilike: `%${keyword}%` } : undefined },
      ],
    };
  }
  if (selectRole !== null) {
    where = {
      ...where,
      role: { _eq: selectRole as Role_Enum },
    };
  }

  const { data: getDataCustomer, loading } = useQuery(GetCustomerDocument, {
    variables: {
      where: where,
      limit: size,
      offset: (page - 1) * size,
    },
  });

  const { data: getRoles } = useQuery(GetRoleDocument);
  const [insertDataUser] = useMutation(InsertUserDocument);
  const [updateUser] = useMutation(UpdateUserDocument);
  const [deleteUser, { loading: loadingDelete }] = useMutation(
    DeleteUserDocument,
    { refetchQueries: ["getCustomer"] }
  );

  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const isEditing = (record: any) => record.id === editingKey;

  const edit = (record: any) => {
    form.setFieldsValue(record);
    setEditingKey(record.id);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const save = async (id: any) => {
    const row = await form.validateFields();
    updateUser({
      variables: {
        id,
        input: {
          name: row.name,
          username: row.username,
          password: row.password,
          phone: row.phone,
          email: row.email,
        },
      },
      onCompleted: () => {
        notification.success({
          message: "Update user information successfully",
          duration: 1,
        });
      },
      refetchQueries: ["getCustomer"],
    });
    setEditingKey("");
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "10%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "20%",
      editable: true,
    },
    {
      title: "Username",
      dataIndex: "username",
      width: "15%",
      editable: true,
    },
    {
      title: "Password",
      dataIndex: "password",
      width: "15%",
      editable: true,
    },

    {
      title: "Role",
      dataIndex: "role",
      width: "10%",
    },
    {
      width: "10%",
      render: (_: any, record: any) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.id)}
              style={{ marginRight: 8 }}
            >
              <CheckCircleTwoTone />
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <CloseCircleTwoTone />
            </Popconfirm>
          </span>
        ) : (
          <Space>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              <EditTwoTone twoToneColor="#EF5350" />
            </Typography.Link>
            <div style={{}} onClick={(e) => e.stopPropagation()}>
              <Popconfirm
                title="Are you sure you want to delete?"
                onConfirm={() =>
                  deleteUser({
                    variables: { id: record.id },
                    onCompleted: () => {
                      notification.success({
                        message: "The user has been successfully deleted.",
                        duration: 1,
                      });
                    },
                  })
                }
                okButtonProps={{
                  loading: loadingDelete,
                  danger: true,
                }}
                cancelText="Cancel"
                okText="OK"
              >
                <DeleteTwoTone
                  twoToneColor="#EF5350"
                  style={{
                    fontSize: 18,
                    textAlign: "center",
                  }}
                />
              </Popconfirm>
            </div>
          </Space>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const onFinish = (values: any) => {
    form.resetFields();
    insertDataUser({
      variables: {
        object: {
          id: values.id,
          name: values.name,
          phone: values.phone,
          username: values.username,
          password: values.password,
          email: values.email,
          role: values.role,
        },
      },
      onCompleted: () => {
        notification.success({
          message: "Success",
          duration: 1,
        });
      },
      refetchQueries: ["getCustomer"],
    });
    setIsModalOpen(false);
    console.log(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const paginationConfig: TablePaginationConfig = {
    total: getDataCustomer?.customer.length,
    pageSize: size,
    current: page,
    showSizeChanger: true,
    onChange: (p, s) =>
      setSearchParams((params) => {
        params.set("page", String(p));
        params.set("size", String(s));
        return params;
      }),
    onShowSizeChange: (p, s) =>
      setSearchParams((params) => {
        params.set("page", String(p));
        params.set("size", String(s));
        return params;
      }),
    showTotal: (total) => (
      <span style={{ color: "#919EAB" }}>{`${total} results`}</span>
    ),
  };
  return (
    <Space direction="vertical">
      <Row justify="space-between">
        <Col>
          <Typography.Text style={{ fontSize: 18, fontWeight: 600 }}>
            Users
          </Typography.Text>
        </Col>
        <Col>
          <Button
            style={{ float: "right" }}
            type="primary"
            size="middle"
            onClick={() => setIsModalOpen(true)}
          >
            <Typography.Text style={{ fontWeight: 600, color: "#fff" }}>
              NEW USER
            </Typography.Text>
          </Button>
        </Col>
      </Row>

      <Divider style={{ margin: 0 }} />
      <Col span={24} className={styles.card}>
        <Space size="small">
          <Space direction="vertical" size="small">
            <Typography.Text strong className={styles.label}>
              Search
            </Typography.Text>
            <Input.Search
              size="large"
              allowClear
              placeholder="Enter ID/ Name/ Email/ Phone number"
              style={{ width: 600 }}
              onChange={debounce((e) => {
                setSearchParams((params) => {
                  params.set("keyword", e.target.value);
                  return params;
                });
              }, 500)}
            />
          </Space>
          <Space direction="vertical" size="small">
            <Typography.Text strong className={styles.label}>
              Select role
            </Typography.Text>
            <Select
              size="large"
              style={{ width: 230 }}
              value={selectRole}
              onChange={(selectRole) =>
                setSearchParams((params) => {
                  params.set("role", String(selectRole));
                  return params;
                })
              }
              options={getRoles?.role.map((item: any) => ({
                label: item.comment,
                value: item.value,
              }))}
            />
          </Space>
        </Space>
      </Col>

      <div style={{ paddingTop: 32 }}>
        <Form form={form} component={false}>
          <Table
            loading={loading}
            className={styles.card}
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            bordered
            dataSource={getDataCustomer?.customer}
            columns={mergedColumns}
            rowClassName="editable-row"
            pagination={paginationConfig}
          />
        </Form>
      </div>

      <Modal
        title="Add User"
        open={isModalOpen}
        onOk={onFinish}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
      >
        <Form
          style={{ paddingTop: 18 }}
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType> label="ID" name="id">
            <Input />
          </Form.Item>
          <Form.Item<FieldType> label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item<FieldType> label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item<FieldType> label="Username" name="username">
            <Input />
          </Form.Item>
          <Form.Item<FieldType> label="Password" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item<FieldType> label="Phone" name="phone">
            <Input />
          </Form.Item>
          <Form.Item label="Role" name="role">
            <Select
              options={getRoles?.role?.map((item: any) => ({
                label: item.comment,
                value: item.value,
              }))}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 14, span: 16 }}>
            <Space>
              <Button
                type="link"
                htmlType="submit"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  );
};

export default UserScreen;
