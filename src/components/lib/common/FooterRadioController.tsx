import React from "react";
import { Radio, Row } from "antd";
import styled from "styled-components";
import { FormItem } from "src/components/ui/kit";
import classNames from "classnames";

const RadioFormItem = styled(FormItem)`
  .ant-form-item-control-input {
    min-height: auto;
  }
`;

const RadioGroup = styled(Radio.Group)`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .radio-flex-wrapper {
    flex: 1;

    &--left {
      border-right: 1px solid #b4b4bb;
    }
  }

  .ant-radio-button-wrapper {
    line-height: inherit;
    height: 22px;
    padding: 0 10px;
  }
`;

interface RadioButtonWrapperProps {
  withDivider?: boolean;
}

export const RadioButtonWrapper: React.FC<RadioButtonWrapperProps> = ({
  children,
  withDivider,
}) => (
  <Row
    className={classNames("radio-flex-wrapper", {
      "radio-flex-wrapper--left": withDivider,
    })}
    align="middle"
    justify="center"
  >
    {children}
  </Row>
);

interface FooterRadioControllerProps {
  name: string;
  defaultValue?: any;
}

const FooterRadioController: React.FC<FooterRadioControllerProps> = ({
  name,
  defaultValue,
  children,
}) => {
  return (
    <Row style={{ flex: 1 }}>
      <RadioFormItem name={name} withoutMarginBottom style={{ width: "100%" }}>
        <RadioGroup defaultValue={defaultValue}>{children}</RadioGroup>
      </RadioFormItem>
    </Row>
  );
};

export default FooterRadioController;
