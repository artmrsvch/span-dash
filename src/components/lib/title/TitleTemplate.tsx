import React from "react";
import { TitleProps } from "src/components/lib/title/types";
import { Form, Input } from "antd";
import { ClonedProps } from "src/components/types";
import TemplateWrapper from "src/components/lib/common/TemplateWrapper";

const TitleTemplate: React.FC<TitleProps & ClonedProps> = () => {
  return (
    <TemplateWrapper>
      <Form.Item
        name="title"
        label="Введите заголовок"
        rules={[{ required: true, message: "Введите заголовок" }]}
      >
        <Input />
      </Form.Item>
    </TemplateWrapper>
  );
};

export default TitleTemplate;
