import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Layout,
  Flex,
  Image,
  Spin,
} from "antd";
import '../App.css';
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/user/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Svgs } from "../components/Svgs/svg-icons";
const { Content } = Layout;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const onFinish = async () => {
    try {
      setLoading(true);
      const resultAction = await dispatch(login(formValues));
      const response = resultAction.payload;
      if (response && response.authToken.refreshToken) {
        let token = response.refreshToken;
        let useremail = response.user.email;
        let userId = response.user.id;
        localStorage.setItem("token", token);
        localStorage.setItem("useremail", useremail);
        localStorage.setItem("userId", userId);
        toast.success(response.message || "Login successful!");
        setTimeout(() => {
          window.location.pathname = "/";
        }, 1000);
      } else {
        if (response && response.message) {
          toast.error(response.message || "Login failed: Invalid Credientials");
        } else {
          toast.error("Login failed: Invalid Credientials");
        }
      }
    } catch (error) {
      console.error("Login API call failed:", error.message);
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='background'>
      <div className="flex flex-col justify-center items-center login-height mt-4 form">
        <div className="flex items-center justify-center lg:justify-start max-w-[200px] mx-auto lg:mx-0 lg:mb-5 max-lg:mb-4">
          {Svgs.logos}
        </div>
        <h1 className="md:text-[34px] text-xl font-normal leading-normal text-white text-center mt-0 mb-1">
          Sign In to Your Account
        </h1>
        <p className="small text-primary font-weight-normal lh-base text-white text-center">
          Welcome back! Please enter your details
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
            email: formValues.email,
            password: formValues.password,
            remember: formValues.remember,
          }}
        >
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
              className="super__select text-sm font-normal text-dark"
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
              className="super__select text-sm font-normal text-dark"
              style={{ opacity: '0.6', border: '1px solid #d9d9d9', color: 'black' }}
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

          <Form.Item name="remember" valuePropName="" noStyle>
            <Checkbox
              className="text-white super__select"
              checked={formValues.remember}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  remember: e.target.checked,
                })
              }
            >
              Remember me
            </Checkbox>
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
                  Sign In
                </Button>
              </Spin>
            </Flex>
          </Form.Item>
          <p className="lg:mt-1 text-sm text-dark font-normal leading-normal text-center">
            Don't have an account yet?
            <Link
              className="text-primary ml-2 font-medium underline"
              to="/signup"
            >
              Create New Account
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

export default Login;
