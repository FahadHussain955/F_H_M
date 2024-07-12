import React from "react";
import {
  Breadcrumb,
  Row,
  Col,
  Avatar,
  Typography,
  Menu,
  Space,
  Dropdown,
  Badge,
} from "antd";
import { Svgs } from "../Svgs/svg-icons";
import PauseClient from "./pause-client";
import DeleteClient from "./delete-customer";
import ChatClient from "./chat-client";

const { Text } = Typography;

const userDropdown = (
  <Menu className="!py-3 border border-[#DBDBDB] rounded-[5px] !shadow-none">
    <Menu.Item key="0">
      <PauseClient />
    </Menu.Item>
    <Menu.Item key="1">
      <DeleteClient />
    </Menu.Item>
  </Menu>
);

const ProposalDetail = () => {
  return (
    <>
      <Breadcrumb
        className="mb-4"
        items={[
          {
            title: <a href="">User Management</a>,
          },
          {
            title: <a href="">Vendor</a>,
          },
          {
            title: <a href="">Ross Detail</a>,
          },
          {
            title: <a href="">Ross’s Request Details</a>,
          },
        ]}
      />
      <Row className="flex flex-col lg:flex-row justify-between lg:items-center items-start mb-1">
        <Col className="gap-2">
          <Text className="text-primary md:text-[32px] text-xl font-medium flex items-center justify-start gap-4 mb-3">
            {Svgs.arrowback}
            Request Details
          </Text>
          <Text className="text-[#868687] text-sm font-normal mb-4 block">
            You can see all the details about the Request here.
          </Text>
        </Col>
        <Col>
          <Dropdown
            overlay={userDropdown}
            placement="bottomRight"
            trigger={["click"]}
            className="cursor-pointer"
          >
            <Space className="gap-1 items-center text-xs font-medium text-primary py-1 px-3 bg-[#D7E5FF] rounded">
              {Svgs.action} <span>Action</span>{" "}
            </Space>
          </Dropdown>
        </Col>
      </Row>
      <Row className="lg:p-6 p-5 rounded-lg bg-[#F5F5F5]">
        <Col span={24} className="flex flex-col gap-5">
          <Row className="grid gap-5">
            <Col span={24}>
              <div className="bg-white rounded p-3">
                <Text className="text-gray font-medium text-base">
                  Service Category:
                </Text>
                <div className="flex items-center gap-3 mt-2">
                  <Avatar
                    className="w-16 h-16 rounded-full"
                    src="./assets/images/avatar.svg"
                  />
                  <div className="flex flex-col">
                    <Text className="text-base font-medium text-primary">
                      Plumber
                    </Text>
                    <div className="flex items-center gap-3 mb-1">
                      <Text className="text-gray text-sm font-normal">
                        Proposal Status:{" "}
                      </Text>
                      <Badge className="text-xs font-normal text-white rounded-3xl bg-success py-[2px] px-3">
                        Accept
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Row className="grid lg:grid-cols-2 gap-5 w-full">
              <Col className="bg-white rounded p-3 flex gap-1 items-center">
                <Text className="text-gray font-medium text-base">
                  Area Name:
                </Text>
                <Text className="text-[#888] font-normal text-base">
                  San Diego
                </Text>
              </Col>
              <Col className="bg-white rounded p-3 flex gap-1 items-center">
                <Text className="text-gray font-medium text-base">
                  Area Category:
                </Text>
                <Text className="text-[#888] font-normal text-base">
                  San Diego
                </Text>
              </Col>
            </Row>
            <Row className="grid lg:grid-cols-2 gap-5 w-full">
              <Col className="bg-white rounded p-3 flex gap-1 items-center">
                <Text className="text-gray font-medium text-base">
                  Zip Code:
                </Text>
                <Text className="text-[#888] font-normal text-base">
                  (A1A A1A)
                </Text>
              </Col>
              <Col className="bg-white rounded p-3 flex gap-1 items-center">
                <Text className="text-gray font-medium text-base">
                  Credit Value:
                </Text>
                <Text className="text-[#888] font-normal text-base">10</Text>
              </Col>
            </Row>
            <Row className="w-full">
              <Col className="bg-white rounded p-3 flex flex-col gap-1 items-start w-full">
                <Text className="text-gray font-medium text-base">
                  Description:
                </Text>
                <Text className="text-[#888] font-normal text-base">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore
                </Text>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col span={24}>
              <div className="bg-white border border-[#E1E1E1] rounded pt-3 pb-6 px-3">
                <div className="flex lg:flex-row flex-col lg:gap-0 gap-3 justify-between items-center">
                  <Text className="text-gray font-medium text-base">
                    Vendors Name:
                  </Text>
                  <div className="flex items-center gap-3 w-full lg:max-w-[340px]">
                    <Text className="text-gray text-base font-normal whitespace-nowrap">
                      Request Date:
                    </Text>
                    <div className="bg-[#F5F5F5] rounded p-2 w-full max-w-[220px]">
                      <Text className="text-sm font-normal text-gray">
                        21-08-2023
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <div className="flex items-center gap-3 mt-2">
                    <Avatar
                      className="w-12 h-12 rounded-full"
                      src="./assets/images/profile.png"
                    />
                    <div className="flex flex-col">
                      <Text className="text-base font-medium text-primary underline">
                        Jhon Harry
                      </Text>
                      <div className="flex items-center gap-3 mb-1">
                        <Text className="text-gray text-sm font-normal">
                          jhon123@gmail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                  <ChatClient />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProposalDetail;
