import React from "react";
import { Drawer } from "antd";
import BlockListItem from "src/components/components/DrawerMenu/components/BlockListItem";
import styled from "styled-components";
import { ComponentEditState } from "src/components/types";
import { lib } from "src/components/lib/config";

interface DrawerMenuProps {
  onClose: () => void;
  onComponentEdit: (props: ComponentEditState) => void;
  visible?: boolean;
}

const StyledDrawer = styled(Drawer)`
  .ant-drawer-content {
    border-radius: 16px 16px 0 0;
  }
  .ant-drawer-body {
    padding: 16px;
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 2px;
      -webkit-transition: background 0.3s ease;
      transition: background 0.3s ease;
    }
    ::-webkit-scrollbar-track {
      background: hsla(0, 0%, 100%, 0);
    }
  }
`;

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  onClose,
  visible,
  onComponentEdit,
}) => (
  <StyledDrawer
    title="Выберите блок"
    placement="bottom"
    getContainer=".constructor-container"
    onClose={onClose}
    visible={visible}
    contentWrapperStyle={{
      maxHeight: "calc(100% - 16px)",
      height: "100%",
    }}
    style={{ position: "absolute" }}
  >
    <ul style={{ listStyle: "none", padding: "0px" }}>
      {Object.keys(lib).map((id) => (
        <BlockListItem
          Icon={lib[id].icon}
          key={id}
          name={lib[id].name}
          id={id}
          setComponent={onComponentEdit}
        />
      ))}
    </ul>
  </StyledDrawer>
);

export default DrawerMenu;
