import React, { useContext, useEffect } from "react";
import TemplateWrapper from "src/components/lib/common/TemplateWrapper";
import DividerComponent from "src/components/lib/divider/DividerComponent";
import FooterRadioController, {
  RadioButtonWrapper,
} from "src/components/lib/common/FooterRadioController";
import { Radio } from "antd";
import {
  LineOutlined,
  EyeInvisibleOutlined,
  MoreOutlined,
  HolderOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { Size } from "src/components/types";
import { FormItem } from "src/components/ui/kit";
import { FormContext } from "src/components/components/ComponentTemplate/helpers";

const DividerTemplate: React.FC = () => {
  const { form } = useContext(FormContext);

  useEffect(() => {
    const size = form?.getFieldValue("size");
    const isVisible = form?.getFieldValue("isVisible");

    if (size === undefined && isVisible === undefined) {
      form?.setFieldsValue({ size: Size.SMALL, isVisible: true });
    }
  }, []);
  return (
    <TemplateWrapper
      footer={
        <>
          <FooterRadioController name="isVisible">
            <RadioButtonWrapper>
              <Radio.Button value={true}>
                <LineOutlined />
              </Radio.Button>
            </RadioButtonWrapper>
            <RadioButtonWrapper withDivider>
              <Radio.Button value={false}>
                <EyeInvisibleOutlined />
              </Radio.Button>
            </RadioButtonWrapper>
          </FooterRadioController>

          <FooterRadioController name="size">
            <RadioButtonWrapper>
              <Radio.Button value={Size.SMALL}>
                <MoreOutlined />
              </Radio.Button>
            </RadioButtonWrapper>
            <RadioButtonWrapper>
              <Radio.Button value={Size.MEDIUM}>
                <HolderOutlined />
              </Radio.Button>
            </RadioButtonWrapper>
            <RadioButtonWrapper>
              <Radio.Button value={Size.LARGE}>
                <BarsOutlined />
              </Radio.Button>
            </RadioButtonWrapper>
          </FooterRadioController>
        </>
      }
    >
      <FormItem shouldUpdate withoutMarginBottom>
        {(instance) => (
          <DividerComponent
            size={instance.getFieldValue("size")}
            isVisible={instance.getFieldValue("isVisible")}
          />
        )}
      </FormItem>
    </TemplateWrapper>
  );
};

export default DividerTemplate;
