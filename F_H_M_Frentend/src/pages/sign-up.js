import {
  Button,
  Checkbox,
  Col,
  Flex,
  Form,
  Image,
  Input,
  Layout,
  Row,
  Spin,
} from "antd";
import React, { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addUser, getAllUsers } from "../store/user/userSlice";
import { Svgs } from "../components/Svgs/svg-icons";

const { Content } = Layout;

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState("");

  const [formValues, setFormValues] = useState({
    roles: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const onFinish = async () => {
    try {
      setLoading(true);
      const resultAction = await dispatch(addUser({ ...formValues }));
      const response = resultAction.payload;
      if (resultAction.error) {
        toast.error("Email already exist.");
      } else if (resultAction) {
        if (response) {
          if (response) {
            toast.success("Sign Up Successful!");
            setTimeout(() => {
              navigate("/login");
            }, 3000);
          }
        } else {
          toast.error(response?.message || "Something went wrong");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error.message);
      toast.error(error.message);
      navigate("/signup");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='background'>
      <div className="flex flex-col justify-center items-center form mt-10 mb-10">
        <div className="flex items-center justify-center lg:justify-start max-w-[200px] mx-auto lg:mx-0 lg:px-0 lg:mb-5 max-lg:mb-4">
          {Svgs.logos}
        </div>
        <h1 className="md:text-[34px] text-xl font-normal leading-normal text-white text-center mt-0 mb-1">
          Sign Up to Your Account
        </h1>
        <p className="text-sm text-white font-normal leading-normal text-center">
          Set up your profile to get started the account
        </p>
        <Form
          name="login"
          size="large"
          layout="vertical"
          style={{
            width: "100%",
            maxWidth: "1000px",
            margin: "30px auto 0 auto",
            fontWeight: "500",
            fontSize: "14px",
            color: 'white',
          }}
          className="flex flex-col gap-4"
          onFinish={onFinish}
          validateMessages={{
            required: "${label} is required",
            types: {
              email: "${label} is not a valid email",
            },
          }}
          initialValues={{
            roles: formValues.roles,
            emailAddress: formValues.email,
            password: formValues.password,
            acceptTerms: acceptTerms,
          }}
        >
          <Flex gap="middle">
            <Form.Item
              label="Role"
              name="Role"
              rules={[
                { required: true, message: "Role is required" },
                { min: 3 },
              ]}
              hasFeedback
            >
              <Input
                size="large"
                required
                placeholder="Enter Role"
                style={{ opacity: '0.7', border: '1px solid #d9d9d9', color: 'black' }}
                className="super__select text-sm font-normal text-dark"
                prefix={<></>}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    roles: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item
              label="First Name"
              name="First Name"
              rules={[
                { required: true, message: "First name is required" },
                { min: 3 },
              ]}
              hasFeedback
            >
              <Input
                size="large"
                required
                placeholder="Enter First Name"
                style={{ opacity: '0.7', border: '1px solid #d9d9d9', color: 'black' }}
                className="super__select text-sm font-normal text-dark"
                prefix={<></>}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="last name"
              rules={[
                { required: true, message: "Last name is required" },
                { min: 3 },
              ]}
              hasFeedback
            >
              <Input
                size="large"
                required
                placeholder="Enter Last Name"
                style={{ opacity: '0.7', border: '1px solid #d9d9d9', color: 'black' }}
                className="super__select text-sm font-normal text-dark"
                prefix={<></>}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Item>
          </Flex>
          <Form.Item
            label="Email"
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
              placeholder="Email"
              className="super__select large font-weight-normal text-dark"
              style={{ opacity: '0.7', border: '1px solid #d9d9d9' }}
              prefix={<></>}
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Password is required" },
              { min: 6 },
              { max: 25 },
            ]}
            hasFeedback
          >
            <Input.Password
              size="large"
              required
              placeholder="Password"
              className="super__select large font-weight-normal text-dark"
              style={{ opacity: '0.7', border: '1px solid #d9d9d9', color: 'black' }}
              value={formValues.password}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  password: e.target.value,
                })
              }
              prefix={<></>}
            />
          </Form.Item>

          <Form.Item
            className="super__select"
            style={{ fontWeight: "400" }}
          >
            <Form.Item
              name="acceptTerms"
              valuePropName="checked"
              noStyle
              rules={[
                { required: true, message: "Accept terms is required" },
              ]}
            >
              <Checkbox
                className="text-dark super__select small me-2"
              // onChange={(e) => setAcceptTerms(true)}
              ></Checkbox>
              I accept
              <Link
                to="/"
                className="text-primary text-decoration-underline mx-1 fw-medium"
              >
                Terms of Use
              </Link>
              ,
              <Link
                to="/"
                className="text-primary text-decoration-underline mx-1 fw-medium"
              >
                Privacy Policy
              </Link>
              and
              <Link
                to="/"
                className="text-primary text-decoration-underline mx-1 fw-medium"
              >
                Cookie Policy
              </Link>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Flex vertical style={{ width: "100%", marginTop: -20 }}>
              <Spin spinning={loading}>
                <Button
                  className="bg-primary border border-primary text-white rounded-3 custom-button"
                  type="submit"
                  htmlType="submit"
                  block
                >
                  Create Account
                </Button>
              </Spin>
            </Flex>
          </Form.Item>
          <p className=" text-sm text-dark font-normal leading-normal text-center">
            Already have an account?
            <Link
              className="text-primary ml-2 font-medium underline"
              to="/login"
            >
              Log In
            </Link>
          </p>
        </Form>
        <ul className="flex items-center justify-center lg:mt-2 max-lg:mt-0 space-x-9" >
          <li>
            <Link className="text-sm text-dark font-normal leading-normal">
              Terms and conditions
            </Link>
          </li>
          <li className="list-disc">
            <Link className="text-sm text-dark font-normal leading-normal">
              Privacy policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SignUp;
