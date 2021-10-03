import React from "react";
import { Form } from "antd";
import Editor from "src/components/components/Editor/Editor";
import { FormContext } from 'src/components/components/ComponentTemplate/helpers';

const TextTemplate: React.FC = () => {
  const { form } = React.useContext(FormContext);

  const setFieldValue = (html: string) => {
    form?.setFieldsValue({ text: html });
  };

  return (
    <Form.Item
      style={{ margin: "0 0 16px 0" }}
      name="text"
      rules={[{ required: true, message: "Введите текст" }]}
    >
      <Editor initialState={form?.getFieldValue('text')} setFieldValue={setFieldValue} />
    </Form.Item>
  );
};

export default TextTemplate;
