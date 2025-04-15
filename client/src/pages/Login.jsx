import { Form, Input, Button, Typography, message, Divider } from "antd";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

const { Title, Text, Link } = Typography;

const Login = () => {
  const navigate = useNavigate();
  //const { login } = useAuth();

  const onFinish = async (values) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        login(data);
        message.success("Logged in successfully!");
        navigate("/dashboard");
      } else {
        message.error(data.message || "Login failed.");
      }
    } catch (err) {
      message.error("Something went wrong.");
    }
  };

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "4rem auto",
        padding: "2.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
        background: "#fff",
      }}
    >
      <Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
        Welcome Back
      </Title>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Invalid email format" },
          ]}
        >
          <Input placeholder="you@example.com" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form>

      <Divider plain>Or</Divider>

      <div style={{ textAlign: "center" }}>
        <Text>Don’t have an account?</Text>
        <br />
        <Button
          type="link"
          style={{ padding: 0, marginTop: 8 }}
          onClick={() => navigate("/signup")}
        >
          <Text strong style={{ fontSize: "1rem" }}>
            Create one here
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default Login;
