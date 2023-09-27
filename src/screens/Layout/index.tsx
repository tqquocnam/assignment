import {
  EditOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { FC, useState } from "react";
import UserScreen from "../UserScreen";

const { Header, Sider, Content } = Layout;

const Layouts: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "User",
            },
            {
              key: "2",
              icon: <SettingOutlined />,
              label: "Setting",
            },
            {
              key: "3",
              icon: <EditOutlined />,
              label: "Todo",
            },
          ]}
        />
      </Sider>
      <Layout hasSider>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            paddingTop: "64px",
            height: "100vh",
            background: colorBgContainer,
          }}
        >
          <UserScreen />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
