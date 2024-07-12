import { useState } from "react";
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
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addCustomer, addUser } from "../../store/user/userSlice";
import { getAllClients } from "../../store/clients/clientsSlice";

const { Text } = Typography;
const { Content } = Layout;

const AddUser = () => {
  const dispatch = useDispatch();
  const createdByID = parseInt(localStorage.getItem("userId"), 10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    createdBy: Number(createdByID),
    updatedBy: Number(createdByID),
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setFormValues({
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      createdBy: Number(createdByID),
      updatedBy: Number(createdByID),
    });
    setIsModalOpen(false);
  };


  const onFinish = async () => {
    try {
      setLoading(true);
     
      const resultAction = await dispatch(addCustomer(formValues));
      const response = resultAction.payload;
      if (resultAction.error) {
        toast.error(resultAction.error.message);
      } else if (resultAction) {
        if (response) {
          toast.success("Customer has been created.");
          dispatch(getAllClients());
          handleCancel();
        } else {
          toast.error(response?.message || "Something went wrong");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Button
        onClick={showModal}
        className="bg-primary flex justify-center items-center w-full max-w-[180px] py-5 text-base font-normal text-white rounded-lg"
        type=""
        icon={Svgs.addiconw}
      >
        Add New User
      </Button>
      <Modal open={isModalOpen} onCancel={handleCancel}>
        <Content className="flex flex-col">
          <Text className="text-primary md:text-[32px] text-xl font-medium text-center">
            Add New User
          </Text>
          <div className="flex flex-col justify-center items-center mt-5">
            <Text className="text-sm font-normal text-[#303030] text-center mb-2">
              Please fill the details below to add new User.
            </Text>
          </div>
          <Form
            name="login"
            size="large"
            layout="vertical"
            onFinish={onFinish}
            style={{
              width: "100%",
              maxWidth: "500px",
              margin: "15px auto 0 auto",
              fontWeight: "500",
              fontSize: "14px",
            }}
            className="flex flex-col gap-3"
          >
            <Form.Item label="Name:">
              <Input
                size="large"
                placeholder="John Shoshone"
                className="super__select text-sm font-normal text-dark h-14"
                prefix={<UserOutlined className="text-[#263238]" />}
                value={formValues.name}
                onChange={(e) =>
                  setFormValues({ ...formValues, name: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item label="Email:">
              <Input
                size="large"
                placeholder="User@gamil. com"
                className="super__select text-sm font-normal text-dark h-14"
                prefix={<MailOutlined className="text-[#263238]" />}
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item label="Phone no:" className="relative">
              <Input
                size="large"
                placeholder="+92*********"
                className="super__select text-sm font-normal text-dark h-14"
                value={formValues.phone}
                onChange={(e) =>
                  setFormValues({ ...formValues, phone: e.target.value })
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
                      Save
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

export default AddUser;
