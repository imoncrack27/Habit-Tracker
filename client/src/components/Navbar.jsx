import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  const location = useLocation();

  const items = [
    {
      key: "/dashboard",
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "/add-habit",
      label: <Link to="/add-habit">Add Habit</Link>,
    },
  ];

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={items}
      />
    </Header>
  );
};

export default Navbar;
