import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "customer" */
export type Customer = {
  __typename?: 'customer';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  ip_address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role_Enum>;
  username?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "customer" */
export type CustomerOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** columns and relationships of "customer" */
export type CustomerOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};

/** aggregated selection of "customer" */
export type Customer_Aggregate = {
  __typename?: 'customer_aggregate';
  aggregate?: Maybe<Customer_Aggregate_Fields>;
  nodes: Array<Customer>;
};

/** aggregate fields of "customer" */
export type Customer_Aggregate_Fields = {
  __typename?: 'customer_aggregate_fields';
  avg?: Maybe<Customer_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Customer_Max_Fields>;
  min?: Maybe<Customer_Min_Fields>;
  stddev?: Maybe<Customer_Stddev_Fields>;
  stddev_pop?: Maybe<Customer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customer_Stddev_Samp_Fields>;
  sum?: Maybe<Customer_Sum_Fields>;
  var_pop?: Maybe<Customer_Var_Pop_Fields>;
  var_samp?: Maybe<Customer_Var_Samp_Fields>;
  variance?: Maybe<Customer_Variance_Fields>;
};


/** aggregate fields of "customer" */
export type Customer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Customer_Avg_Fields = {
  __typename?: 'customer_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "customer". All fields are combined with a logical 'AND'. */
export type Customer_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_Bool_Exp>>;
  _not?: InputMaybe<Customer_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  ip_address?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Order_Bool_Exp>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Bool_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Role_Enum_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customer" */
export enum Customer_Constraint {
  /** unique or primary key constraint on columns "id" */
  CustomerPkey = 'customer_pkey'
}

/** input type for incrementing numeric columns in table "customer" */
export type Customer_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "customer" */
export type Customer_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Order_Arr_Rel_Insert_Input>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role_Enum>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Customer_Max_Fields = {
  __typename?: 'customer_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Customer_Min_Fields = {
  __typename?: 'customer_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "customer" */
export type Customer_Mutation_Response = {
  __typename?: 'customer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Customer>;
};

/** input type for inserting object relation for remote table "customer" */
export type Customer_Obj_Rel_Insert_Input = {
  data: Customer_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Customer_On_Conflict>;
};

/** on_conflict condition type for table "customer" */
export type Customer_On_Conflict = {
  constraint: Customer_Constraint;
  update_columns?: Array<Customer_Update_Column>;
  where?: InputMaybe<Customer_Bool_Exp>;
};

/** Ordering options when selecting data from "customer". */
export type Customer_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip_address?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customer */
export type Customer_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "customer" */
export enum Customer_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IpAddress = 'ip_address',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  Role = 'role',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "customer" */
export type Customer_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role_Enum>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Customer_Stddev_Fields = {
  __typename?: 'customer_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Customer_Stddev_Pop_Fields = {
  __typename?: 'customer_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Customer_Stddev_Samp_Fields = {
  __typename?: 'customer_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "customer" */
export type Customer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customer_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role_Enum>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Customer_Sum_Fields = {
  __typename?: 'customer_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "customer" */
export enum Customer_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IpAddress = 'ip_address',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  Role = 'role',
  /** column name */
  Username = 'username'
}

export type Customer_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Customer_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Customer_Set_Input>;
  /** filter the rows which have to be updated */
  where: Customer_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Customer_Var_Pop_Fields = {
  __typename?: 'customer_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Customer_Var_Samp_Fields = {
  __typename?: 'customer_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Customer_Variance_Fields = {
  __typename?: 'customer_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "customer" */
  delete_customer?: Maybe<Customer_Mutation_Response>;
  /** delete single row from the table: "customer" */
  delete_customer_by_pk?: Maybe<Customer>;
  /** delete data from the table: "order" */
  delete_order?: Maybe<Order_Mutation_Response>;
  /** delete single row from the table: "order" */
  delete_order_by_pk?: Maybe<Order>;
  /** delete data from the table: "race_results" */
  delete_race_results?: Maybe<Race_Results_Mutation_Response>;
  /** delete single row from the table: "race_results" */
  delete_race_results_by_pk?: Maybe<Race_Results>;
  /** delete data from the table: "race_year" */
  delete_race_year?: Maybe<Race_Year_Mutation_Response>;
  /** delete single row from the table: "race_year" */
  delete_race_year_by_pk?: Maybe<Race_Year>;
  /** delete data from the table: "role" */
  delete_role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "role" */
  delete_role_by_pk?: Maybe<Role>;
  /** insert data into the table: "customer" */
  insert_customer?: Maybe<Customer_Mutation_Response>;
  /** insert a single row into the table: "customer" */
  insert_customer_one?: Maybe<Customer>;
  /** insert data into the table: "order" */
  insert_order?: Maybe<Order_Mutation_Response>;
  /** insert a single row into the table: "order" */
  insert_order_one?: Maybe<Order>;
  /** insert data into the table: "race_results" */
  insert_race_results?: Maybe<Race_Results_Mutation_Response>;
  /** insert a single row into the table: "race_results" */
  insert_race_results_one?: Maybe<Race_Results>;
  /** insert data into the table: "race_year" */
  insert_race_year?: Maybe<Race_Year_Mutation_Response>;
  /** insert a single row into the table: "race_year" */
  insert_race_year_one?: Maybe<Race_Year>;
  /** insert data into the table: "role" */
  insert_role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "role" */
  insert_role_one?: Maybe<Role>;
  /** update data of the table: "customer" */
  update_customer?: Maybe<Customer_Mutation_Response>;
  /** update single row of the table: "customer" */
  update_customer_by_pk?: Maybe<Customer>;
  /** update multiples rows of table: "customer" */
  update_customer_many?: Maybe<Array<Maybe<Customer_Mutation_Response>>>;
  /** update data of the table: "order" */
  update_order?: Maybe<Order_Mutation_Response>;
  /** update single row of the table: "order" */
  update_order_by_pk?: Maybe<Order>;
  /** update multiples rows of table: "order" */
  update_order_many?: Maybe<Array<Maybe<Order_Mutation_Response>>>;
  /** update data of the table: "race_results" */
  update_race_results?: Maybe<Race_Results_Mutation_Response>;
  /** update single row of the table: "race_results" */
  update_race_results_by_pk?: Maybe<Race_Results>;
  /** update multiples rows of table: "race_results" */
  update_race_results_many?: Maybe<Array<Maybe<Race_Results_Mutation_Response>>>;
  /** update data of the table: "race_year" */
  update_race_year?: Maybe<Race_Year_Mutation_Response>;
  /** update single row of the table: "race_year" */
  update_race_year_by_pk?: Maybe<Race_Year>;
  /** update multiples rows of table: "race_year" */
  update_race_year_many?: Maybe<Array<Maybe<Race_Year_Mutation_Response>>>;
  /** update data of the table: "role" */
  update_role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "role" */
  update_role_by_pk?: Maybe<Role>;
  /** update multiples rows of table: "role" */
  update_role_many?: Maybe<Array<Maybe<Role_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CustomerArgs = {
  where: Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customer_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrderArgs = {
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Race_ResultsArgs = {
  where: Race_Results_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Race_Results_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Race_YearArgs = {
  where: Race_Year_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Race_Year_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_CustomerArgs = {
  objects: Array<Customer_Insert_Input>;
  on_conflict?: InputMaybe<Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customer_OneArgs = {
  object: Customer_Insert_Input;
  on_conflict?: InputMaybe<Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderArgs = {
  objects: Array<Order_Insert_Input>;
  on_conflict?: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_OneArgs = {
  object: Order_Insert_Input;
  on_conflict?: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Race_ResultsArgs = {
  objects: Array<Race_Results_Insert_Input>;
  on_conflict?: InputMaybe<Race_Results_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Race_Results_OneArgs = {
  object: Race_Results_Insert_Input;
  on_conflict?: InputMaybe<Race_Results_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Race_YearArgs = {
  objects: Array<Race_Year_Insert_Input>;
  on_conflict?: InputMaybe<Race_Year_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Race_Year_OneArgs = {
  object: Race_Year_Insert_Input;
  on_conflict?: InputMaybe<Race_Year_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CustomerArgs = {
  _inc?: InputMaybe<Customer_Inc_Input>;
  _set?: InputMaybe<Customer_Set_Input>;
  where: Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_By_PkArgs = {
  _inc?: InputMaybe<Customer_Inc_Input>;
  _set?: InputMaybe<Customer_Set_Input>;
  pk_columns: Customer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_ManyArgs = {
  updates: Array<Customer_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrderArgs = {
  _inc?: InputMaybe<Order_Inc_Input>;
  _set?: InputMaybe<Order_Set_Input>;
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_By_PkArgs = {
  _inc?: InputMaybe<Order_Inc_Input>;
  _set?: InputMaybe<Order_Set_Input>;
  pk_columns: Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_ManyArgs = {
  updates: Array<Order_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Race_ResultsArgs = {
  _inc?: InputMaybe<Race_Results_Inc_Input>;
  _set?: InputMaybe<Race_Results_Set_Input>;
  where: Race_Results_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Race_Results_By_PkArgs = {
  _inc?: InputMaybe<Race_Results_Inc_Input>;
  _set?: InputMaybe<Race_Results_Set_Input>;
  pk_columns: Race_Results_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Race_Results_ManyArgs = {
  updates: Array<Race_Results_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Race_YearArgs = {
  _inc?: InputMaybe<Race_Year_Inc_Input>;
  _set?: InputMaybe<Race_Year_Set_Input>;
  where: Race_Year_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Race_Year_By_PkArgs = {
  _inc?: InputMaybe<Race_Year_Inc_Input>;
  _set?: InputMaybe<Race_Year_Set_Input>;
  pk_columns: Race_Year_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Race_Year_ManyArgs = {
  updates: Array<Race_Year_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_ManyArgs = {
  updates: Array<Role_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** columns and relationships of "order" */
export type Order = {
  __typename?: 'order';
  /** An object relationship */
  customer?: Maybe<Customer>;
  customer_id?: Maybe<Scalars['Int']['output']>;
  discount_price?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  order_date?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  purchase_price?: Maybe<Scalars['String']['output']>;
  transaction_id?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "order" */
export type Order_Aggregate = {
  __typename?: 'order_aggregate';
  aggregate?: Maybe<Order_Aggregate_Fields>;
  nodes: Array<Order>;
};

export type Order_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Aggregate_Bool_Exp_Count>;
};

export type Order_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Order_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "order" */
export type Order_Aggregate_Fields = {
  __typename?: 'order_aggregate_fields';
  avg?: Maybe<Order_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Order_Max_Fields>;
  min?: Maybe<Order_Min_Fields>;
  stddev?: Maybe<Order_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Sum_Fields>;
  var_pop?: Maybe<Order_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Var_Samp_Fields>;
  variance?: Maybe<Order_Variance_Fields>;
};


/** aggregate fields of "order" */
export type Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "order" */
export type Order_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Max_Order_By>;
  min?: InputMaybe<Order_Min_Order_By>;
  stddev?: InputMaybe<Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order" */
export type Order_Arr_Rel_Insert_Input = {
  data: Array<Order_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Avg_Fields = {
  __typename?: 'order_avg_fields';
  customer_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "order" */
export type Order_Avg_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Bool_Exp>>;
  _not?: InputMaybe<Order_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Bool_Exp>>;
  customer?: InputMaybe<Customer_Bool_Exp>;
  customer_id?: InputMaybe<Int_Comparison_Exp>;
  discount_price?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order_date?: InputMaybe<String_Comparison_Exp>;
  product?: InputMaybe<String_Comparison_Exp>;
  purchase_price?: InputMaybe<String_Comparison_Exp>;
  transaction_id?: InputMaybe<String_Comparison_Exp>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** unique or primary key constraints on table "order" */
export enum Order_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderPkey = 'order_pkey'
}

/** input type for incrementing numeric columns in table "order" */
export type Order_Inc_Input = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "order" */
export type Order_Insert_Input = {
  customer?: InputMaybe<Customer_Obj_Rel_Insert_Input>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  discount_price?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order_date?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  purchase_price?: InputMaybe<Scalars['String']['input']>;
  transaction_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Order_Max_Fields = {
  __typename?: 'order_max_fields';
  customer_id?: Maybe<Scalars['Int']['output']>;
  discount_price?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order_date?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  purchase_price?: Maybe<Scalars['String']['output']>;
  transaction_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "order" */
export type Order_Max_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  discount_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Min_Fields = {
  __typename?: 'order_min_fields';
  customer_id?: Maybe<Scalars['Int']['output']>;
  discount_price?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order_date?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  purchase_price?: Maybe<Scalars['String']['output']>;
  transaction_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "order" */
export type Order_Min_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  discount_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order" */
export type Order_Mutation_Response = {
  __typename?: 'order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Order>;
};

/** on_conflict condition type for table "order" */
export type Order_On_Conflict = {
  constraint: Order_Constraint;
  update_columns?: Array<Order_Update_Column>;
  where?: InputMaybe<Order_Bool_Exp>;
};

/** Ordering options when selecting data from "order". */
export type Order_Order_By = {
  customer?: InputMaybe<Customer_Order_By>;
  customer_id?: InputMaybe<Order_By>;
  discount_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  product?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order */
export type Order_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "order" */
export enum Order_Select_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  DiscountPrice = 'discount_price',
  /** column name */
  Id = 'id',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  Product = 'product',
  /** column name */
  PurchasePrice = 'purchase_price',
  /** column name */
  TransactionId = 'transaction_id'
}

/** input type for updating data in table "order" */
export type Order_Set_Input = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  discount_price?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order_date?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  purchase_price?: InputMaybe<Scalars['String']['input']>;
  transaction_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Order_Stddev_Fields = {
  __typename?: 'order_stddev_fields';
  customer_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "order" */
export type Order_Stddev_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Stddev_Pop_Fields = {
  __typename?: 'order_stddev_pop_fields';
  customer_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "order" */
export type Order_Stddev_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Stddev_Samp_Fields = {
  __typename?: 'order_stddev_samp_fields';
  customer_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "order" */
export type Order_Stddev_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "order" */
export type Order_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Stream_Cursor_Value_Input = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  discount_price?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order_date?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  purchase_price?: InputMaybe<Scalars['String']['input']>;
  transaction_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Order_Sum_Fields = {
  __typename?: 'order_sum_fields';
  customer_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "order" */
export type Order_Sum_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "order" */
export enum Order_Update_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  DiscountPrice = 'discount_price',
  /** column name */
  Id = 'id',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  Product = 'product',
  /** column name */
  PurchasePrice = 'purchase_price',
  /** column name */
  TransactionId = 'transaction_id'
}

export type Order_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Order_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Order_Var_Pop_Fields = {
  __typename?: 'order_var_pop_fields';
  customer_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "order" */
export type Order_Var_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Var_Samp_Fields = {
  __typename?: 'order_var_samp_fields';
  customer_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "order" */
export type Order_Var_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Variance_Fields = {
  __typename?: 'order_variance_fields';
  customer_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "order" */
export type Order_Variance_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk?: Maybe<Customer>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "race_results" */
  race_results: Array<Race_Results>;
  /** fetch aggregated fields from the table: "race_results" */
  race_results_aggregate: Race_Results_Aggregate;
  /** fetch data from the table: "race_results" using primary key columns */
  race_results_by_pk?: Maybe<Race_Results>;
  /** fetch data from the table: "race_year" */
  race_year: Array<Race_Year>;
  /** fetch aggregated fields from the table: "race_year" */
  race_year_aggregate: Race_Year_Aggregate;
  /** fetch data from the table: "race_year" using primary key columns */
  race_year_by_pk?: Maybe<Race_Year>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
};


export type Query_RootCustomerArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Query_RootCustomer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Query_RootCustomer_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRace_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Race_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Race_Results_Order_By>>;
  where?: InputMaybe<Race_Results_Bool_Exp>;
};


export type Query_RootRace_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Race_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Race_Results_Order_By>>;
  where?: InputMaybe<Race_Results_Bool_Exp>;
};


export type Query_RootRace_Results_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRace_YearArgs = {
  distinct_on?: InputMaybe<Array<Race_Year_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Race_Year_Order_By>>;
  where?: InputMaybe<Race_Year_Bool_Exp>;
};


export type Query_RootRace_Year_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Race_Year_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Race_Year_Order_By>>;
  where?: InputMaybe<Race_Year_Bool_Exp>;
};


export type Query_RootRace_Year_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_By_PkArgs = {
  value: Scalars['String']['input'];
};

/** columns and relationships of "race_results" */
export type Race_Results = {
  __typename?: 'race_results';
  car: Scalars['String']['output'];
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  laps: Scalars['numeric']['output'];
  time?: Maybe<Scalars['String']['output']>;
  venue: Scalars['String']['output'];
  winner?: Maybe<Scalars['String']['output']>;
  year: Scalars['numeric']['output'];
};

/** aggregated selection of "race_results" */
export type Race_Results_Aggregate = {
  __typename?: 'race_results_aggregate';
  aggregate?: Maybe<Race_Results_Aggregate_Fields>;
  nodes: Array<Race_Results>;
};

export type Race_Results_Aggregate_Bool_Exp = {
  count?: InputMaybe<Race_Results_Aggregate_Bool_Exp_Count>;
};

export type Race_Results_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Race_Results_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Race_Results_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "race_results" */
export type Race_Results_Aggregate_Fields = {
  __typename?: 'race_results_aggregate_fields';
  avg?: Maybe<Race_Results_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Race_Results_Max_Fields>;
  min?: Maybe<Race_Results_Min_Fields>;
  stddev?: Maybe<Race_Results_Stddev_Fields>;
  stddev_pop?: Maybe<Race_Results_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Race_Results_Stddev_Samp_Fields>;
  sum?: Maybe<Race_Results_Sum_Fields>;
  var_pop?: Maybe<Race_Results_Var_Pop_Fields>;
  var_samp?: Maybe<Race_Results_Var_Samp_Fields>;
  variance?: Maybe<Race_Results_Variance_Fields>;
};


/** aggregate fields of "race_results" */
export type Race_Results_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Race_Results_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "race_results" */
export type Race_Results_Aggregate_Order_By = {
  avg?: InputMaybe<Race_Results_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Race_Results_Max_Order_By>;
  min?: InputMaybe<Race_Results_Min_Order_By>;
  stddev?: InputMaybe<Race_Results_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Race_Results_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Race_Results_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Race_Results_Sum_Order_By>;
  var_pop?: InputMaybe<Race_Results_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Race_Results_Var_Samp_Order_By>;
  variance?: InputMaybe<Race_Results_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "race_results" */
export type Race_Results_Arr_Rel_Insert_Input = {
  data: Array<Race_Results_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Race_Results_On_Conflict>;
};

/** aggregate avg on columns */
export type Race_Results_Avg_Fields = {
  __typename?: 'race_results_avg_fields';
  laps?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "race_results" */
export type Race_Results_Avg_Order_By = {
  laps?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "race_results". All fields are combined with a logical 'AND'. */
export type Race_Results_Bool_Exp = {
  _and?: InputMaybe<Array<Race_Results_Bool_Exp>>;
  _not?: InputMaybe<Race_Results_Bool_Exp>;
  _or?: InputMaybe<Array<Race_Results_Bool_Exp>>;
  car?: InputMaybe<String_Comparison_Exp>;
  date?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  laps?: InputMaybe<Numeric_Comparison_Exp>;
  time?: InputMaybe<String_Comparison_Exp>;
  venue?: InputMaybe<String_Comparison_Exp>;
  winner?: InputMaybe<String_Comparison_Exp>;
  year?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "race_results" */
export enum Race_Results_Constraint {
  /** unique or primary key constraint on columns "id" */
  RaceResultsPkey = 'race_results_pkey'
}

/** input type for incrementing numeric columns in table "race_results" */
export type Race_Results_Inc_Input = {
  laps?: InputMaybe<Scalars['numeric']['input']>;
  year?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "race_results" */
export type Race_Results_Insert_Input = {
  car?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  laps?: InputMaybe<Scalars['numeric']['input']>;
  time?: InputMaybe<Scalars['String']['input']>;
  venue?: InputMaybe<Scalars['String']['input']>;
  winner?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Race_Results_Max_Fields = {
  __typename?: 'race_results_max_fields';
  car?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  laps?: Maybe<Scalars['numeric']['output']>;
  time?: Maybe<Scalars['String']['output']>;
  venue?: Maybe<Scalars['String']['output']>;
  winner?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "race_results" */
export type Race_Results_Max_Order_By = {
  car?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  laps?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  venue?: InputMaybe<Order_By>;
  winner?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Race_Results_Min_Fields = {
  __typename?: 'race_results_min_fields';
  car?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  laps?: Maybe<Scalars['numeric']['output']>;
  time?: Maybe<Scalars['String']['output']>;
  venue?: Maybe<Scalars['String']['output']>;
  winner?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "race_results" */
export type Race_Results_Min_Order_By = {
  car?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  laps?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  venue?: InputMaybe<Order_By>;
  winner?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "race_results" */
export type Race_Results_Mutation_Response = {
  __typename?: 'race_results_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Race_Results>;
};

/** on_conflict condition type for table "race_results" */
export type Race_Results_On_Conflict = {
  constraint: Race_Results_Constraint;
  update_columns?: Array<Race_Results_Update_Column>;
  where?: InputMaybe<Race_Results_Bool_Exp>;
};

/** Ordering options when selecting data from "race_results". */
export type Race_Results_Order_By = {
  car?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  laps?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  venue?: InputMaybe<Order_By>;
  winner?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** primary key columns input for table: race_results */
export type Race_Results_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "race_results" */
export enum Race_Results_Select_Column {
  /** column name */
  Car = 'car',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Laps = 'laps',
  /** column name */
  Time = 'time',
  /** column name */
  Venue = 'venue',
  /** column name */
  Winner = 'winner',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "race_results" */
export type Race_Results_Set_Input = {
  car?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  laps?: InputMaybe<Scalars['numeric']['input']>;
  time?: InputMaybe<Scalars['String']['input']>;
  venue?: InputMaybe<Scalars['String']['input']>;
  winner?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Race_Results_Stddev_Fields = {
  __typename?: 'race_results_stddev_fields';
  laps?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "race_results" */
export type Race_Results_Stddev_Order_By = {
  laps?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Race_Results_Stddev_Pop_Fields = {
  __typename?: 'race_results_stddev_pop_fields';
  laps?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "race_results" */
export type Race_Results_Stddev_Pop_Order_By = {
  laps?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Race_Results_Stddev_Samp_Fields = {
  __typename?: 'race_results_stddev_samp_fields';
  laps?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "race_results" */
export type Race_Results_Stddev_Samp_Order_By = {
  laps?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "race_results" */
export type Race_Results_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Race_Results_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Race_Results_Stream_Cursor_Value_Input = {
  car?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  laps?: InputMaybe<Scalars['numeric']['input']>;
  time?: InputMaybe<Scalars['String']['input']>;
  venue?: InputMaybe<Scalars['String']['input']>;
  winner?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Race_Results_Sum_Fields = {
  __typename?: 'race_results_sum_fields';
  laps?: Maybe<Scalars['numeric']['output']>;
  year?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "race_results" */
export type Race_Results_Sum_Order_By = {
  laps?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** update columns of table "race_results" */
export enum Race_Results_Update_Column {
  /** column name */
  Car = 'car',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Laps = 'laps',
  /** column name */
  Time = 'time',
  /** column name */
  Venue = 'venue',
  /** column name */
  Winner = 'winner',
  /** column name */
  Year = 'year'
}

export type Race_Results_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Race_Results_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Race_Results_Set_Input>;
  /** filter the rows which have to be updated */
  where: Race_Results_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Race_Results_Var_Pop_Fields = {
  __typename?: 'race_results_var_pop_fields';
  laps?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "race_results" */
export type Race_Results_Var_Pop_Order_By = {
  laps?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Race_Results_Var_Samp_Fields = {
  __typename?: 'race_results_var_samp_fields';
  laps?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "race_results" */
export type Race_Results_Var_Samp_Order_By = {
  laps?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Race_Results_Variance_Fields = {
  __typename?: 'race_results_variance_fields';
  laps?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "race_results" */
export type Race_Results_Variance_Order_By = {
  laps?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** columns and relationships of "race_year" */
export type Race_Year = {
  __typename?: 'race_year';
  id: Scalars['uuid']['output'];
  /** An array relationship */
  results: Array<Race_Results>;
  /** An aggregate relationship */
  results_aggregate: Race_Results_Aggregate;
  year: Scalars['numeric']['output'];
};


/** columns and relationships of "race_year" */
export type Race_YearResultsArgs = {
  distinct_on?: InputMaybe<Array<Race_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Race_Results_Order_By>>;
  where?: InputMaybe<Race_Results_Bool_Exp>;
};


/** columns and relationships of "race_year" */
export type Race_YearResults_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Race_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Race_Results_Order_By>>;
  where?: InputMaybe<Race_Results_Bool_Exp>;
};

/** aggregated selection of "race_year" */
export type Race_Year_Aggregate = {
  __typename?: 'race_year_aggregate';
  aggregate?: Maybe<Race_Year_Aggregate_Fields>;
  nodes: Array<Race_Year>;
};

/** aggregate fields of "race_year" */
export type Race_Year_Aggregate_Fields = {
  __typename?: 'race_year_aggregate_fields';
  avg?: Maybe<Race_Year_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Race_Year_Max_Fields>;
  min?: Maybe<Race_Year_Min_Fields>;
  stddev?: Maybe<Race_Year_Stddev_Fields>;
  stddev_pop?: Maybe<Race_Year_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Race_Year_Stddev_Samp_Fields>;
  sum?: Maybe<Race_Year_Sum_Fields>;
  var_pop?: Maybe<Race_Year_Var_Pop_Fields>;
  var_samp?: Maybe<Race_Year_Var_Samp_Fields>;
  variance?: Maybe<Race_Year_Variance_Fields>;
};


/** aggregate fields of "race_year" */
export type Race_Year_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Race_Year_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Race_Year_Avg_Fields = {
  __typename?: 'race_year_avg_fields';
  year?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "race_year". All fields are combined with a logical 'AND'. */
export type Race_Year_Bool_Exp = {
  _and?: InputMaybe<Array<Race_Year_Bool_Exp>>;
  _not?: InputMaybe<Race_Year_Bool_Exp>;
  _or?: InputMaybe<Array<Race_Year_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  results?: InputMaybe<Race_Results_Bool_Exp>;
  results_aggregate?: InputMaybe<Race_Results_Aggregate_Bool_Exp>;
  year?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "race_year" */
export enum Race_Year_Constraint {
  /** unique or primary key constraint on columns "id" */
  RaceYearPkey = 'race_year_pkey'
}

/** input type for incrementing numeric columns in table "race_year" */
export type Race_Year_Inc_Input = {
  year?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "race_year" */
export type Race_Year_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  results?: InputMaybe<Race_Results_Arr_Rel_Insert_Input>;
  year?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Race_Year_Max_Fields = {
  __typename?: 'race_year_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  year?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Race_Year_Min_Fields = {
  __typename?: 'race_year_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  year?: Maybe<Scalars['numeric']['output']>;
};

/** response of any mutation on the table "race_year" */
export type Race_Year_Mutation_Response = {
  __typename?: 'race_year_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Race_Year>;
};

/** on_conflict condition type for table "race_year" */
export type Race_Year_On_Conflict = {
  constraint: Race_Year_Constraint;
  update_columns?: Array<Race_Year_Update_Column>;
  where?: InputMaybe<Race_Year_Bool_Exp>;
};

/** Ordering options when selecting data from "race_year". */
export type Race_Year_Order_By = {
  id?: InputMaybe<Order_By>;
  results_aggregate?: InputMaybe<Race_Results_Aggregate_Order_By>;
  year?: InputMaybe<Order_By>;
};

/** primary key columns input for table: race_year */
export type Race_Year_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "race_year" */
export enum Race_Year_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "race_year" */
export type Race_Year_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  year?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Race_Year_Stddev_Fields = {
  __typename?: 'race_year_stddev_fields';
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Race_Year_Stddev_Pop_Fields = {
  __typename?: 'race_year_stddev_pop_fields';
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Race_Year_Stddev_Samp_Fields = {
  __typename?: 'race_year_stddev_samp_fields';
  year?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "race_year" */
export type Race_Year_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Race_Year_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Race_Year_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  year?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Race_Year_Sum_Fields = {
  __typename?: 'race_year_sum_fields';
  year?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "race_year" */
export enum Race_Year_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Year = 'year'
}

export type Race_Year_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Race_Year_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Race_Year_Set_Input>;
  /** filter the rows which have to be updated */
  where: Race_Year_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Race_Year_Var_Pop_Fields = {
  __typename?: 'race_year_var_pop_fields';
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Race_Year_Var_Samp_Fields = {
  __typename?: 'race_year_var_samp_fields';
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Race_Year_Variance_Fields = {
  __typename?: 'race_year_variance_fields';
  year?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "role" */
export type Role = {
  __typename?: 'role';
  comment: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
  __typename?: 'role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
  __typename?: 'role_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
};


/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Bool_Exp>>;
  _not?: InputMaybe<Role_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "role" */
export enum Role_Constraint {
  /** unique or primary key constraint on columns "value" */
  RolePkey = 'role_pkey'
}

export enum Role_Enum {
  /** ADMINISTRATOR */
  Administrator = 'ADMINISTRATOR',
  /** AUTHOR */
  Author = 'AUTHOR',
  /** CONTRIBUTOR */
  Contributor = 'CONTRIBUTOR',
  /** EDITOR */
  Editor = 'EDITOR'
}

/** Boolean expression to compare columns of type "role_enum". All fields are combined with logical 'AND'. */
export type Role_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Role_Enum>;
  _in?: InputMaybe<Array<Role_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Role_Enum>;
  _nin?: InputMaybe<Array<Role_Enum>>;
};

/** input type for inserting data into table "role" */
export type Role_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'role_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'role_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "role" */
export type Role_Mutation_Response = {
  __typename?: 'role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** on_conflict condition type for table "role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "role". */
export type Role_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: role */
export type Role_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "role" */
export enum Role_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "role" */
export type Role_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "role" */
export type Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "role" */
export enum Role_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: Role_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk?: Maybe<Customer>;
  /** fetch data from the table in a streaming manner: "customer" */
  customer_stream: Array<Customer>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table in a streaming manner: "order" */
  order_stream: Array<Order>;
  /** fetch data from the table: "race_results" */
  race_results: Array<Race_Results>;
  /** fetch aggregated fields from the table: "race_results" */
  race_results_aggregate: Race_Results_Aggregate;
  /** fetch data from the table: "race_results" using primary key columns */
  race_results_by_pk?: Maybe<Race_Results>;
  /** fetch data from the table in a streaming manner: "race_results" */
  race_results_stream: Array<Race_Results>;
  /** fetch data from the table: "race_year" */
  race_year: Array<Race_Year>;
  /** fetch aggregated fields from the table: "race_year" */
  race_year_aggregate: Race_Year_Aggregate;
  /** fetch data from the table: "race_year" using primary key columns */
  race_year_by_pk?: Maybe<Race_Year>;
  /** fetch data from the table in a streaming manner: "race_year" */
  race_year_stream: Array<Race_Year>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table in a streaming manner: "role" */
  role_stream: Array<Role>;
};


export type Subscription_RootCustomerArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootCustomer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootCustomer_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootCustomer_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Customer_Stream_Cursor_Input>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrder_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Order_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootRace_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Race_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Race_Results_Order_By>>;
  where?: InputMaybe<Race_Results_Bool_Exp>;
};


export type Subscription_RootRace_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Race_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Race_Results_Order_By>>;
  where?: InputMaybe<Race_Results_Bool_Exp>;
};


export type Subscription_RootRace_Results_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRace_Results_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Race_Results_Stream_Cursor_Input>>;
  where?: InputMaybe<Race_Results_Bool_Exp>;
};


export type Subscription_RootRace_YearArgs = {
  distinct_on?: InputMaybe<Array<Race_Year_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Race_Year_Order_By>>;
  where?: InputMaybe<Race_Year_Bool_Exp>;
};


export type Subscription_RootRace_Year_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Race_Year_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Race_Year_Order_By>>;
  where?: InputMaybe<Race_Year_Bool_Exp>;
};


export type Subscription_RootRace_Year_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRace_Year_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Race_Year_Stream_Cursor_Input>>;
  where?: InputMaybe<Race_Year_Bool_Exp>;
};


export type Subscription_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootRole_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetCustomerQueryVariables = Exact<{
  where: Customer_Bool_Exp;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetCustomerQuery = { __typename?: 'query_root', customer: Array<{ __typename?: 'customer', id: number, role?: Role_Enum | null, name?: string | null, email?: string | null, phone?: string | null, username?: string | null, password?: string | null, created_at?: any | null }> };

export type GetRoleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoleQuery = { __typename?: 'query_root', role: Array<{ __typename?: 'role', comment: string, value: string }> };

export type InsertUserMutationVariables = Exact<{
  object: Customer_Insert_Input;
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insert_customer_one?: { __typename?: 'customer', id: number, username?: string | null, password?: string | null } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: Customer_Set_Input;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_customer_by_pk?: { __typename?: 'customer', id: number, username?: string | null, password?: string | null } | null };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'mutation_root', update_customer_by_pk?: { __typename?: 'customer', id: number } | null };


export const GetCustomerDocument = gql`
    query getCustomer($where: customer_bool_exp!, $limit: Int, $offset: Int) {
  customer(
    where: $where
    limit: $limit
    offset: $offset
    order_by: {created_at: desc}
  ) {
    id
    role
    name
    email
    phone
    username
    password
    created_at
  }
}
    `;

/**
 * __useGetCustomerQuery__
 *
 * To run a query within a React component, call `useGetCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetCustomerQuery(baseOptions: Apollo.QueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerQuery, GetCustomerQueryVariables>(GetCustomerDocument, options);
      }
export function useGetCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerQuery, GetCustomerQueryVariables>(GetCustomerDocument, options);
        }
export type GetCustomerQueryHookResult = ReturnType<typeof useGetCustomerQuery>;
export type GetCustomerLazyQueryHookResult = ReturnType<typeof useGetCustomerLazyQuery>;
export type GetCustomerQueryResult = Apollo.QueryResult<GetCustomerQuery, GetCustomerQueryVariables>;
export const GetRoleDocument = gql`
    query getRole {
  role {
    comment
    value
  }
}
    `;

/**
 * __useGetRoleQuery__
 *
 * To run a query within a React component, call `useGetRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoleQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRoleQuery(baseOptions?: Apollo.QueryHookOptions<GetRoleQuery, GetRoleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRoleQuery, GetRoleQueryVariables>(GetRoleDocument, options);
      }
export function useGetRoleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRoleQuery, GetRoleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRoleQuery, GetRoleQueryVariables>(GetRoleDocument, options);
        }
export type GetRoleQueryHookResult = ReturnType<typeof useGetRoleQuery>;
export type GetRoleLazyQueryHookResult = ReturnType<typeof useGetRoleLazyQuery>;
export type GetRoleQueryResult = Apollo.QueryResult<GetRoleQuery, GetRoleQueryVariables>;
export const InsertUserDocument = gql`
    mutation insertUser($object: customer_insert_input!) {
  insert_customer_one(object: $object) {
    id
    username
    password
  }
}
    `;
export type InsertUserMutationFn = Apollo.MutationFunction<InsertUserMutation, InsertUserMutationVariables>;

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertUserMutation(baseOptions?: Apollo.MutationHookOptions<InsertUserMutation, InsertUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertUserMutation, InsertUserMutationVariables>(InsertUserDocument, options);
      }
export type InsertUserMutationHookResult = ReturnType<typeof useInsertUserMutation>;
export type InsertUserMutationResult = Apollo.MutationResult<InsertUserMutation>;
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<InsertUserMutation, InsertUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($id: Int!, $input: customer_set_input!) {
  update_customer_by_pk(pk_columns: {id: $id}, _set: $input) {
    id
    username
    password
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($id: Int!) {
  update_customer_by_pk(pk_columns: {id: $id}, _set: {deleted_at: "now()"}) {
    id
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;