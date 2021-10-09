import React from "react";
import { Input, Row, Radio } from "antd";
import TemplateWrapper from "src/components/lib/common/TemplateWrapper";
import LinkComponent from "src/components/lib/link/LinkComponent";
import { FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { FormItem } from "src/components/ui/kit";
import FooterRadioController, {
  RadioButtonWrapper,
} from "src/components/lib/common/FooterRadioController";

const StyledFormItem = styled(FormItem)`
  width: 100%;

  .ant-form-item-control-input-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LinkTemplate: React.FC = () => (
  <TemplateWrapper
    header={
      <Row align="middle" justify="center">
        <StyledFormItem shouldUpdate withoutMarginBottom>
          {(instance) => (
            <LinkComponent
              text={instance.getFieldValue("text") || "Название ссылки"}
              link={instance.getFieldValue("link")}
              fullWidth={instance.getFieldValue("fullWidth")}
            />
          )}
        </StyledFormItem>
      </Row>
    }
    footer={
      <FooterRadioController name="fullWidth" defaultValue={false}>
        <RadioButtonWrapper withDivider>
          <Radio.Button value={false}>
            <FullscreenExitOutlined />
          </Radio.Button>
        </RadioButtonWrapper>
        <RadioButtonWrapper>
          <Radio.Button value={true}>
            <FullscreenOutlined />
          </Radio.Button>
        </RadioButtonWrapper>
      </FooterRadioController>
    }
  >
    <FormItem
      name="text"
      label="Название ссылки"
      rules={[{ required: true, message: "Необходимо ввести название ссылки" }]}
    >
      <Input />
    </FormItem>
    <FormItem
      withoutMarginBottom
      name="link"
      label="URL ссылки"
      rules={[{ required: true, message: "Необходимо ввести ссылку" }]}
    >
      <Input />
    </FormItem>
  </TemplateWrapper>
);

export default LinkTemplate;
