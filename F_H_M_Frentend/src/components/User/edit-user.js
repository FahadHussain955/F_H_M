import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Flex,
  Typography,
  Layout,
  Spin,
} from "antd";
import { Svgs } from "../Svgs/svg-icons";
import { MailOutlined } from "@ant-design/icons";
import { getAllUsers, update_User } from "../../store/user/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const { Text } = Typography;
const { Content } = Layout;

const EditUser = ({ data }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const createdByID = parseInt(localStorage.getItem("userId"), 10);
  const [formValues, setFormValues] = useState({
    password: Number(data.phone),
    createdBy: Number(data.createdBy),
    updatedBy: Number(createdByID),
  });
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      let id = data.id;
      const resultAction = await dispatch(
        update_User({ id, ...formValues })
      );
      if (resultAction && resultAction?.payload) {
        await dispatch(getAllUsers());
        toast.success("user has been updated");
        setFormValues({
          phone: Number(data.phone),
          createdBy: Number(data.createdBy),
          updatedBy: Number(createdByID),
        });
        setIsModalOpen(false);
      } else if (resultAction?.error?.message) {
        toast.error(resultAction?.error?.message || "something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div onClick={showModal} className="flex gap-2">
        {Svgs.editg}
        Edit user
      </div>
      <Modal destroyOnClose open={isModalOpen} onCancel={handleCancel}>
        <Content className="flex flex-col">
          <Text className="text-primary md:text-[32px] text-xl font-medium text-center">
            Edit user
          </Text>
          <div className="flex flex-col justify-center items-center mt-5">
            <Text className="text-sm font-normal text-[#303030] text-center mb-2">
              Please fill the details below to edit user.
            </Text>
          </div>
          <Form
            name="login"
            size="large"
            layout="vertical"
            onFinish={handleSubmit}
            style={{
              width: "100%",
              maxWidth: "500px",
              margin: "15px auto 0 auto",
              fontWeight: "500",
              fontSize: "14px",
            }}
            className="flex flex-col gap-3"
          >
            <Form.Item label="new password" className="relative">
              <Input
                size="large"
                placeholder="********"
                className="super__select text-sm font-normal text-dark h-14"
                onChange={(e) =>
                  setFormValues({ ...formValues, password: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item>
              <Flex vertical style={{ marginTop: 20 }}>
                <Spin spinning={loading}>
                  <div className="flex">
                    <Button
                      className="bg-primary border border-primary text-white hover:bg-white hover:text-primary rounded-xl !h-14 transition-all ease-out w-full max-w-[320px] mx-auto"
                      type=""
                      htmlType="submit"
                      block
                    >
                      Update
                    </Button>
                  </div>
                </Spin>
              </Flex>
            </Form.Item>
          </Form>
        </Content>
      </Modal>
    </div>
  );
};

export default EditUser;
