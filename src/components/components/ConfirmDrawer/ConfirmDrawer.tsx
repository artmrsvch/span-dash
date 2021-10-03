import React from "react";
import { Button, Col, Drawer } from "antd";
import {
  ConfirmDrawerProps,
  ConfirmProps,
} from "src/components/components/ConfirmDrawer/types";

type ConfirmVisible = { visible?: boolean };

const ConfirmDrawer: React.FC<
  ConfirmDrawerProps & ConfirmVisible & ConfirmProps
> = ({
  title,
  cancelButtonText,
  okButtonText,
  description,
  visible,
  onCancel,
  onOk,
}) => (
  <Drawer
    onClose={onCancel}
    placement="bottom"
    getContainer=".constructor-container"
    style={{ position: "absolute" }}
    visible={visible}
    title={title}
    footer={
      <Col>
        <Button onClick={onCancel}>{cancelButtonText}</Button>
        <Button onClick={onOk}>{okButtonText}</Button>
      </Col>
    }
  >
    {description}
  </Drawer>
);

export default ConfirmDrawer;
