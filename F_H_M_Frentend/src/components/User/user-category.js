import React, { useEffect, useState } from "react";
import {
  Layout,
  Space,
  Table,
  Menu,
  Dropdown,
  Input,
  Row,
  Col,
  Typography,
  Breadcrumb,
} from "antd";
import { Svgs } from "../Svgs/svg-icons";
import ClientEmpty from "./client-empty";
import EditUser from "./edit-user";
import DeleteUser from "./delete-user";

const { Search } = Input;
const { Text } = Typography;

function UserCategory({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [orginalData, setOrginalData] = useState(data);
  const [filteredData, setFilteredData] = useState(data);
  const [clearFilter, setClearFilter] = useState(false);
  const handleActiveFileter = (booleanValue) => setClearFilter(booleanValue);

  const formatDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };

  const userDropdown = (record) => (
    <Menu className="!py-3 border border-[#DBDBDB] rounded-[5px] !shadow-none">
      <Menu.Item key="1">
        <EditUser data={record} />
      </Menu.Item>
      <Menu.Item key="2">
        <DeleteUser data={record} />
      </Menu.Item>
    </Menu>
  );

  const handleSearch = (value) => {
    setSearchTerm(value);
    handleActiveFileter(!!value);
    filterData();
  };
  useEffect(() => {
    filterData();
  }, [searchTerm, data, clearFilter]);
  useEffect(() => {
    setFilteredData(data);
    setOrginalData(data);
  }, []);
  const filterData = () => {
    data = data.filter((item) =>
      item?.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(data);
  };

  const getColumns = () => {
    return [
      {
        title: "Email address",
        dataIndex: "email",
        key: "0",
      },
      {
        title: "Join Date",
        dataIndex: "CreatedAt",
        key: "0",
      },
      {
        title: "UserRole",
        dataIndex: "roles",
        key: "roles",
      },
      {
        title: "",
        dataIndex: "actions",
        key: "actions",
        align: "right",
        render: (text, record) => (
          <Space size="middle">
            <Dropdown
              overlay={userDropdown(record)}
              placement="bottomRight"
              trigger={["click"]}
              className="cursor-pointer"
            >
              <Space className="gap-3 items-center">{Svgs.dots}</Space>
            </Dropdown>
          </Space>
        ),
      },
    ];
  };
  return (
    <Layout>
      <Breadcrumb
        className="mb-4"
        items={[
          {
            title: <a href="">User Management</a>,
          },
          {
            title: <a href="">User</a>,
          },
        ]}
      />
      <Row className="flex justify-between items-center mb-4">
        <Col>
          <Text className="text-primary md:text-[32px] text-xl font-medium ">
            User
          </Text>
        </Col>
        <Col>
          {/* <AddUser /> */}
        </Col>
      </Row>
      {data?.length && (
        <div className="flex gap-3 mb-5">
          <Search
            allowClear
            value={searchTerm}
            className="search-input-custom w-full max-w-[400px]"
            placeholder="Search Service"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      )}
      <div>
        {filteredData.length > 0 ? (
          <Table
            className="service-table"
            columns={getColumns()}
            dataSource={filteredData}
            pagination={{
              defaultCurrent: 1,
              pageSize: 10,
              total: orginalData.length,
            }}
          />
        ) : (
          <ClientEmpty />
        )}
      </div>
    </Layout>
  );
}

export default UserCategory;
