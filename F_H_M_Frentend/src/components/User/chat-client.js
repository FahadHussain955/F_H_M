import React, { useState } from "react";
import { Modal, Typography, Avatar } from "antd";
import { Svgs } from "../Svgs/svg-icons";
import PerfectScrollbar from "react-perfect-scrollbar";

const { Text } = Typography;

const ChatClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-5">
      <div
        onClick={showModal}
        className="flex gap-3 items-center bg-primary py-2 px-3 rounded cursor-pointer w-full max-w-[260px]"
      >
        <div className="flex items-center gap-2">
          {Svgs.chat}
          <Text className="md:text-xl text-lg text-white font-normal">
            View Chat History
          </Text>
        </div>
        <div className="-rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M7.03125 9.9375L12.9681 16L19.0306 10.0632"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <Modal
        className="!w-full !max-w-[630px]"
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <div>
          <Text className="md:text-[32px] text-2xl font-medium text-primary">
            Chat History
          </Text>
          <PerfectScrollbar className="!mt-10" style={{ maxHeight: 400 }}>
            <div>
              <div className="flex items-start gap-3">
                <Avatar
                  className="w-8 h-8 rounded-full"
                  src="./assets/images/avatar-vendor.svg"
                />
                <div className="flex flex-col gap-2">
                  <Text className="border border-[#9A9EA5] bg-white rounded-xl p-2 w-full max-w-[400px] text-primary text-sm">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </Text>
                  <Text className="text-xs text-[#333]">8:00 PM</Text>
                </div>
              </div>
              <div className="flex justify-end items-start gap-3">
                <div className="flex flex-col gap-2">
                  <Text className="border border-primary bg-primary rounded-xl p-2 w-full max-w-[400px] text-white text-sm">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </Text>
                  <Text className="text-xs text-[#333] flex justify-end">
                    8:00 PM
                  </Text>
                </div>
                <Avatar
                  className="w-8 h-8 rounded-full"
                  src="./assets/images/profile.png"
                />
              </div>
              <div className="flex items-start gap-3">
                <Avatar
                  className="w-8 h-8 rounded-full"
                  src="./assets/images/avatar-vendor.svg"
                />
                <div className="flex flex-col gap-2">
                  <Text className="border border-[#9A9EA5] bg-white rounded-xl p-2 w-full max-w-[400px] text-primary text-sm">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </Text>
                  <Text className="text-xs text-[#333]">8:00 PM</Text>
                </div>
              </div>
              <div className="flex justify-end items-start gap-3">
                <div className="flex flex-col gap-2">
                  <Text className="border border-primary bg-primary rounded-xl p-2 w-full max-w-[400px] text-white text-sm">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </Text>
                  <Text className="text-xs text-[#333] flex justify-end">
                    8:00 PM
                  </Text>
                </div>
                <Avatar
                  className="w-8 h-8 rounded-full"
                  src="./assets/images/profile.png"
                />
              </div>
              <div className="flex items-start gap-3">
                <Avatar
                  className="w-8 h-8 rounded-full"
                  src="./assets/images/avatar-vendor.svg"
                />
                <div className="flex flex-col gap-2">
                  <Text className="border border-[#9A9EA5] bg-white rounded-xl p-2 w-full max-w-[400px] text-primary text-sm">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </Text>
                  <Text className="text-xs text-[#333]">8:00 PM</Text>
                </div>
              </div>
              <div className="flex justify-end items-start gap-3">
                <div className="flex flex-col gap-2">
                  <Text className="border border-primary bg-primary rounded-xl p-2 w-full max-w-[400px] text-white text-sm">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </Text>
                  <Text className="text-xs text-[#333] flex justify-end">
                    8:00 PM
                  </Text>
                </div>
                <Avatar
                  className="w-8 h-8 rounded-full"
                  src="./assets/images/profile.png"
                />
              </div>
              <div className="flex items-start gap-3">
                <Avatar
                  className="w-8 h-8 rounded-full"
                  src="./assets/images/avatar-vendor.svg"
                />
                <div className="flex flex-col gap-2">
                  <Text className="border border-[#9A9EA5] bg-white rounded-xl p-2 w-full max-w-[400px] text-primary text-sm">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </Text>
                  <Text className="text-xs text-[#333]">8:00 PM</Text>
                </div>
              </div>
              <div className="flex justify-end items-start gap-3">
                <div className="flex flex-col gap-2">
                  <Text className="border border-primary bg-primary rounded-xl p-2 w-full max-w-[400px] text-white text-sm">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </Text>
                  <Text className="text-xs text-[#333] flex justify-end">
                    8:00 PM
                  </Text>
                </div>
                <Avatar
                  className="w-8 h-8 rounded-full"
                  src="./assets/images/profile.png"
                />
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </Modal>
    </div>
  );
};

export default ChatClient;
