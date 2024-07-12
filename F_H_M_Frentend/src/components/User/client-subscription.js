import React from "react";
import {
  Pagination,
  Col,
  Avatar,
  Typography,
  Space,
  Dropdown,
  Menu,
} from "antd";
import { Svgs } from "../Svgs/svg-icons";
import PauseClient from "./pause-client";
import DeleteUser from "./delete-user";

const { Text } = Typography;

const userDropdown = (
  <Menu className="!py-3 border border-[#DBDBDB] rounded-[5px] !shadow-none">
    <Menu.Item key="0">
      <PauseClient />
    </Menu.Item>
    <Menu.Item key="1">
      <DeleteUser />
    </Menu.Item>
  </Menu>
);

const ClientSubscription = () => {
  return (
    <Col span={24} className="bg-white card__shadow lg:p-5 p-3 rounded-lg">
      <Text className="md:text-xl text-lg font-medium text-gray mb-3">
        Availed Services:
      </Text>
      <div>
        <div className="grid xl:grid-cols-3 gap-4 mt-5">
          <div className="bg-[#fbfbfb] border border-[#DEDEDE] rounded pt-2 px-2 pb-10 relative">
            <div className="flex items-center gap-2">
              <Avatar
                className="w-9 h-9 rounded-full"
                src="./assets/images/avatar.svg"
              />
              <Text className="text-base text-primary font-medium">
                Plumber
              </Text>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <div className="flex items-center gap-1 text-xs">
                <span className="font-medium text-gray">Area Name:</span>
                <span className="font-normal text-[#888888]">San Diego</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span className="font-medium text-gray">Zip code:</span>
                <span className="font-normal text-[#888888]">
                  (A1A A1A), (A1A A1A), (A1A A1A)
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span className="font-medium text-gray">Area Category:</span>
                <span className="font-normal text-[#888888]">San Diego 1</span>
              </div>
            </div>
            <div className="bg-[#DDDFE3] p-2 text-primary text-xs absolute bottom-0 w-full left-0 rounded-bl rounded-br">
              <div className="flex items-center gap-1">
                <span className="font-medium">Vendor Name:</span>
                <span className="font-normal">Adam Synder</span>
              </div>
            </div>
            <Space size="middle" className="absolute top-2 right-2">
              <Dropdown
                overlay={userDropdown}
                placement="bottomRight"
                trigger={["click"]}
                className="cursor-pointer"
              >
                <Space className="gap-3 items-center">{Svgs.dots}</Space>
              </Dropdown>
            </Space>
          </div>
          <div className="bg-[#fbfbfb] border border-[#DEDEDE] rounded pt-2 px-2 pb-10 relative">
            <div className="flex items-center gap-2">
              <Avatar
                className="w-9 h-9 rounded-full"
                src="./assets/images/door-fiting.svg"
              />
              <Text className="text-base text-primary font-medium">
                Door Fitting
              </Text>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <div className="flex items-center gap-1 text-xs">
                <span className="font-medium text-gray">Area Name:</span>
                <span className="font-normal text-[#888888]">San Diego</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span className="font-medium text-gray">Zip code:</span>
                <span className="font-normal text-[#888888]">
                  (A1A A1A), (A1A A1A), (A1A A1A)
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span className="font-medium text-gray">Area Category:</span>
                <span className="font-normal text-[#888888]">San Diego 1</span>
              </div>
            </div>
            <div className="bg-[#DDDFE3] p-2 text-primary text-xs absolute bottom-0 w-full left-0 rounded-bl rounded-br">
              <div className="flex items-center gap-1">
                <span className="font-medium">Vendor Name:</span>
                <span className="font-normal">Adam Synder</span>
              </div>
            </div>
            <Space size="middle" className="absolute top-2 right-2">
              <Dropdown
                overlay={userDropdown}
                placement="bottomRight"
                trigger={["click"]}
                className="cursor-pointer"
              >
                <Space className="gap-3 items-center">{Svgs.dots}</Space>
              </Dropdown>
            </Space>
          </div>
          <div className="bg-[#fbfbfb] border border-[#DEDEDE] rounded pt-2 px-2 pb-10 relative">
            <div className="flex items-center gap-2">
              <Avatar
                className="w-9 h-9 rounded-full"
                src="./assets/images/door-fiting.svg"
              />
              <Text className="text-base text-primary font-medium">
                Door Fitting
              </Text>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <div className="flex items-center gap-1 text-xs">
                <span className="font-medium text-gray">Area Name:</span>
                <span className="font-normal text-[#888888]">San Diego</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span className="font-medium text-gray">Zip code:</span>
                <span className="font-normal text-[#888888]">
                  (A1A A1A), (A1A A1A), (A1A A1A)
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span className="font-medium text-gray">Area Category:</span>
                <span className="font-normal text-[#888888]">San Diego 1</span>
              </div>
            </div>
            <div className="bg-[#DDDFE3] p-2 text-primary text-xs absolute bottom-0 w-full left-0 rounded-bl rounded-br">
              <div className="flex items-center gap-1">
                <span className="font-medium">Vendor Name:</span>
                <span className="font-normal">Adam Synder</span>
              </div>
            </div>
            <Space size="middle" className="absolute top-2 right-2">
              <Dropdown
                overlay={userDropdown}
                placement="bottomRight"
                trigger={["click"]}
                className="cursor-pointer"
              >
                <Space className="gap-3 items-center">{Svgs.dots}</Space>
              </Dropdown>
            </Space>
          </div>
        </div>
        <div className="flex justify-end mt-10">
          <Pagination defaultCurrent={1} pageSize={3} total={100} />
        </div>
      </div>
    </Col>
  );
};

export default ClientSubscription;
