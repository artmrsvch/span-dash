import React from "react";
import { Form, Input } from "antd";
import TemplateWrapper from "src/components/lib/common/TemplateWrapper";

const ProfileTemplate: React.FC = () => {
  return (
    <TemplateWrapper>
      <Form.Item
        name="title"
        label="Заголовок"
        rules={[{ required: true, message: "Введите заголовок" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="signature"
        label="Подпись"
        rules={[{ required: true, message: "Введите подпись" }]}
      >
        <Input />
      </Form.Item>
    </TemplateWrapper>
  );
};

export default ProfileTemplate;
