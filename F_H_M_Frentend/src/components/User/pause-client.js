import React, { useState } from "react";
import { Button, Modal, Typography, Layout, Flex, Image } from "antd";
import { Svgs } from "../Svgs/svg-icons";

const { Text } = Typography;
const { Content } = Layout;

const PauseClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div onClick={showModal} className="flex gap-2">
        {Svgs.pausesm}
        {/* {Svgs.resumesm} */}
        Pause/Resume
      </div>
      <Modal open={isModalOpen} onCancel={handleCancel}>
        <Content className="flex flex-col">
          <Image
            preview={false}
            className="max-w-[80px] mx-auto"
            src="../assets/images/pause.svg"
          />
          {/* <Image
            preview={false}
            className="max-w-[80px] mx-auto"
            src="../assets/images/resume.svg"
          /> */}
          <div className="flex flex-col justify-center items-center mt-5">
            <Text className="text-base font-normal text-[#2c2c2e] text-center mb-2 max-w-[320px]">
              Are you sure you want to Pause this{" "}
              <span className="font-bold">Plumber</span> category?
            </Text>
          </div>
          <Flex gap={16} className="mt-6 justify-center">
            <Button
              className="bg-primary border border-primary flex justify-center items-center w-full max-w-[110px] py-5 text-sm font-normal text-white rounded-md"
              type=""
            >
              Yes
            </Button>
            <Button
              className="bg-[#D9D9D9] border border-[#D9D9D9] flex justify-center items-center w-full max-w-[110px] py-5 text-sm font-normal text-[#2c2c2e] rounded-md"
              type=""
            >
              No
            </Button>
          </Flex>
        </Content>
      </Modal>
    </div>
  );
};

export default PauseClient;
