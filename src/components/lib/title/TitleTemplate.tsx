import React from "react";
import { TitleProps } from "src/components/lib/title/types";
import { Form, Input } from "antd";
import { ClonedProps } from "src/components/types";

const TitleTemplate: React.FC<TitleProps & ClonedProps> = () => {
  return (
    <Form.Item
      name="title"
      label="Заголовок"
      rules={[{ required: true, message: "Введите заголовок" }]}
    >
      <Input />
    </Form.Item>
  );
};

export default TitleTemplate;
