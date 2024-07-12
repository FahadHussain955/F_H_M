import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Layout, Flex, Image, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Svgs } from "../components/Svgs/svg-icons";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch } from "react-redux";
import { forgotPassowrd, update_User } from "../store/user/userSlice";
import { toast } from "react-toastify";

const { Content } = Layout;

const ForgetPassword = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState("");

  const [formValues, setFormValues] = useState({
    email: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const resultAction = await dispatch(update_User(formValues.email));
      const response = resultAction.payload;
      if (resultAction.error && !response) {
        toast.error(resultAction.error.message);
      } else if (response) {
        if (response && response.message) {
          toast.success(
            response.message ||
            "Please Check Your Email and Reset your password"
          );
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Content>
        <Row className="w-full flex lg:flex-row lg:items-stretch flex-col lg:gap-0 gap-5 lg:min-h-screen lg:max-h-screen overflow-hidden">
          <Col className="lg:w-[41.8%] relative flex flex-col justify-between">
            <PerfectScrollbar className="lg:max-h-screen lg:px-9 px-5 py-5 flex flex-col">
              <div className="flex items-center justify-center lg:justify-start max-w-[200px] mx-auto lg:mx-0 lg:mb-9 max-lg:mb-4">
                {Svgs.loginlogo}
              </div>
              <div className="flex flex-col justify-center items-center h-full">
                <h1 className="md:text-xl text-lg font-medium leading-normal text-dark mt-3 mb-1">
                  Reset your password
                </h1>
                <p className="text-sm text-primary font-normal leading-normal">
                  Type in your registered email address to reset password
                </p>
                <Form
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    margin: "30px auto 0 auto",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                  form={form}
                  onFinish={handleSubmit}
                  onFinishFailed={(error) => {
                    console.log({ error });
                  }}
                  name="login"
                  size="large"
                  layout="vertical"
                  className="flex flex-col gap-3 lg:my-10 my-5"
                >
                  <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                      { required: true, message: "Email is required" },
                      {
                        type: "email",
                        message: "Email is not a valid email",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input
                      size="large"
                      required
                      placeholder="User@mail.com"
                      className="super__select text-sm font-normal text-dark"
                      prefix={<></>}
                      value={formValues.email}
                      onChange={(e) =>
                        setFormValues({ ...formValues, email: e.target.value })
                      }
                    />
                  </Form.Item>
                  <Form.Item>
                    <Flex vertical style={{ width: "100%", marginTop: 20 }}>
                      <Spin spinning={loading}>
                        <Button
                          className="bg-primary border border-primary text-white hover:bg-white hover:text-primary rounded-xl !h-14 transition-all ease-out"
                          type="submit"
                          htmlType="submit"
                          block
                        >
                          Reset Password
                        </Button>
                      </Spin>
                    </Flex>
                  </Form.Item>
                  <p className="lg:mt-1 text-sm text-primary font-normal leading-normal text-center">
                    <Link
                      className="text-primary ml-1 font-medium underline"
                      to="/login"
                    >
                      Back to Login
                    </Link>
                  </p>
                </Form>
              </div>
            </PerfectScrollbar>
          </Col>
          <Col className="bg-login-gradient lg:flex-1 lg:px-9 px-5 py-10 hidden lg:block">
            <div className="flex items-center justify-center w-full h-full">
              <Image
                preview={false}
                className="lg:max-w-sm"
                src="../assets/images/forget-page-pic.svg"
              />
            </div>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default ForgetPassword;
