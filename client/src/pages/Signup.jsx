import { Form, Input, Button, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Signup = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        message.success("Signup successful! Please log in.");
        navigate("/login");
      } else {
        message.error(data.message || "Signup failed.");
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
        Create Account
      </Title>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="John Doe" />
        </Form.Item>

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
          <Input.Password placeholder="Create a password" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Sign Up
        </Button>

        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          Already have an account?{" "}
          <Button type="link" onClick={() => navigate("/login")}>
            Log in
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
