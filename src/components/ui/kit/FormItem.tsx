import styled from "styled-components";
import { Form } from "antd";
import { xs } from "src/components/ui/breakpoints";

interface StyledFormItemProps {
  isStandardSettings?: boolean;
  withoutMarginBottom?: boolean;
}

const FormItem = styled(Form.Item)<StyledFormItemProps>`
  ${({ isStandardSettings }) => (isStandardSettings ? "" : "display: block;")}

  ${({ withoutMarginBottom }) =>
    withoutMarginBottom ? "margin-bottom: 0px;" : "margin-bottom: 16px;"}

  .ant-form-item-label > label {
    font-weight: 500;
    font-size: 14px;
    color: #333;
    &:after {
      ${({ isStandardSettings }) =>
        isStandardSettings ? "" : "content: none!important;"}
    }
  }
  .ant-form-item-control-input {
    min-height: auto;
  }

  .ant-form-item-required:before {
    font-size: 14px !important;
  }

  @media screen and (max-width: ${xs}) {
    .ant-form-item-label > label {
      font-size: 12px;
      ${({ isStandardSettings }) => isStandardSettings && "font-size: 14px;"}
    }
    .ant-form-item-required:before {
      font-size: 12px !important;
    }
  }
`;

export default FormItem;
