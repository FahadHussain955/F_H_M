import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Layout, Flex, Image, Spin } from "antd";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Svgs } from "../components/Svgs/svg-icons";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset_Passowrd } from "../store/user/userSlice";
import { toast } from "react-toastify";
const { Content } = Layout;

const ResetPassword = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState("");
  const { token } = useParams();
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    newPasswordToken: token,
    newPassword: "",
  });

  const isUpdatePasswordConfirmation = params.get("update-password");
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const resultAction = dispatch(reset_Passowrd(formValues));
      const result = await resultAction;
      const response = result.payload;
      if (result.error) {
        toast.error(result.error.message || "bad request");
      } else if (response && response.data.message) {
        toast.success(response.data.message || "password reset successfully");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error in reset password:", error.message);
      toast.error(error.message || "An error occurred");
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
                  {isUpdatePasswordConfirmation
                    ? "Update your password"
                    : "Reset your password"}
                </h1>
                <p className="text-sm text-primary font-normal leading-normal">
                  Type in your new password.
                </p>
                <Form
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    margin: "30px auto 0 auto",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                  name="login"
                  form={form}
                  onFinish={handleSubmit}
                  onFinishFailed={(error) => {
                    console.log({ error });
                  }}
                  size="large"
                  layout="vertical"
                  className="flex flex-col gap-3 lg:my-10 my-5"
                >
                  <Form.Item
                    name="new password"
                    label="New Password"
                    rules={[{ required: true }, { min: 6 }, { max: 25 }]}
                    hasFeedback
                  >
                    <Input.Password
                      size="large"
                      required
                      placeholder="*******"
                      className="super__select text-sm font-normal text-dark"
                      prefix={<></>}
                      value={formValues.newPassword}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          newPassword: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label="Confirm Password"
                    name="confirm password"
                    dependencies={["new password"]}
                    rules={[
                      { required: true },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (
                            !value ||
                            getFieldValue("new password") === value
                          ) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "The two passwords that you entered do not match"
                          );
                        },
                      }),
                    ]}
                    hasFeedback
                  >
                    <Input.Password
                      size="large"
                      required
                      placeholder="*******"
                      className="super__select text-sm font-normal text-dark"
                      prefix={<></>}
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
                          {isUpdatePasswordConfirmation
                            ? "Save"
                            : "Reset Password"}
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
                src="../assets/images/reset-page-img.svg"
              />
            </div>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default ResetPassword;
