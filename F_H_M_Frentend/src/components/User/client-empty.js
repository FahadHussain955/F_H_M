import React from "react";
import { Typography, Breadcrumb, Row, Col, Image } from "antd";
import { Content } from "antd/es/layout/layout";
import AddClient from "./add-user";

const { Text } = Typography;

const ClientEmpty = () => {
  return (
    <Content>
      <section className="flex flex-col justify-center items-center mt-6 bg-[#F5F5F5] p-8 rounded-xl">
        <Image
          preview={false}
          className="lg:max-w-md mx-auto mb-3"
          src="../assets/images/no-client-img.svg"
        />
        <Text className="text-[#2C2C2E] md:text-2xl text-xl font-normal mt-2 mb-2">
          No Customer list to display
        </Text>
        <Text className="text-[#868687] md:text-lg text-base font-normal mb-7 text-center !leading-tight max-w-[360px]">
          Let's start adding/inviting New Customer by simply by clicking{" "}
          <span className="font-semibold">Add New Customer</span> button.
        </Text>
        <AddClient />
      </section>
    </Content>
  );
};

export default ClientEmpty;
