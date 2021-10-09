import React from "react";
import styled from "styled-components";
import { Button, Dropdown, Menu, Row } from "antd";
import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { MenuInfo } from "rc-menu/lib/interface";
import { useConfirmDrawer } from "src/components/components/ConfirmDrawer/useConfirmDrawer";
import { ConfirmDrawerProps } from "src/components/components/ConfirmDrawer/types";
import { Actions } from "src/components/useConstructor";

interface DrawerHeaderProps {
  onSave: (actions?: Actions) => void;
  uid?: string;
}

const deleteComponentProps: ConfirmDrawerProps = {
  description: "Вы действительно хотите удалить блок? Это действие необратимо.",
  title: "Удаление блока",
  okButtonText: "Удалить",
  cancelButtonText: "Отменить",
};

const menu = (handleMenuClick: (info: MenuInfo) => void) => (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="delete" icon={<CopyOutlined />}>
      Удалить
    </Menu.Item>
    <Menu.Item key="copy" icon={<DeleteOutlined />}>
      Дублировать
    </Menu.Item>
  </Menu>
);
const DropdownButton = styled(Dropdown.Button)`
  .anticon {
    font-size: 24px;
  }
  .ant-btn-default {
    border: none;
    box-shadow: none;
  }
`;

const CompensationSpan = styled.span`
  width: 42px;
`

const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  children,
  onSave,
  uid,
}) => {
  const onDeleteComponent = () => onSave(Actions.REMOVE_COMPONENT);

  const { contextHolder, openConfirm } = useConfirmDrawer({
    onDeleteComponent,
  });

  function handleMenuClick(e: MenuInfo) {
    if (e.key === "delete") {
      openConfirm(deleteComponentProps);
    } else if (e.key === "copy") {
      onSave(Actions.COPY_COMPONENT);
    }
  }

  return (
    <Row align="middle" justify="space-between" >
      <Button onClick={() => onSave()} type="link">
        {uid ? "Сохранить" : "Добавить"}
      </Button>
      {children}
      {uid ? <DropdownButton trigger={['click']} overlay={menu(handleMenuClick)} /> : <CompensationSpan />}
      {contextHolder}
    </Row>
  );
};

export default DrawerHeader;
