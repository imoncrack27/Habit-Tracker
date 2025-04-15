import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const AddHabit = () => {
  const [habit, setHabit] = useState("");

  const handleSubmit = () => {
    console.log("Habit added:", habit);
    // Here, you will eventually call an API to add the habit
  };

  return (
    <div>
      <h1>Add a New Habit</h1>
      <Form onFinish={handleSubmit}>
        <Form.Item label="Habit Name" required>
          <Input
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
            placeholder="Enter habit name"
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Add Habit
        </Button>
      </Form>
    </div>
  );
};

export default AddHabit;
