import React from "react";
import { Form, Input } from "antd";

const ProfileTemplate: React.FC = () => {
  return (
    <div>
      <Form.Item name="title" label="Заголовок" rules={[{required: true, message: 'Введите заголовок'}]}>
        <Input />
      </Form.Item>
      <Form.Item name="signature" label="Подпись" rules={[{required: true, message: 'Введите подпись'}]}>
        <Input />
      </Form.Item>
    </div>
  );
};

export default ProfileTemplate;
