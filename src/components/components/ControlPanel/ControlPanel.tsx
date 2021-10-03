import React from "react";
import {
  BgColorsOutlined,
  ColumnHeightOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Panel,
  ActionButtonContainer,
  MainActionButton,
  MainActionButtonContainer,
  StyledButton,
  PanelContent,
  BtnWrapper,
} from "./styled";

interface ControlPanelProps {
  isSortMode: boolean;
  toggleSetSortMode: () => void;
  toggleMenuDrawer: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  isSortMode,
  toggleSetSortMode,
  toggleMenuDrawer,
}) => (
  <Panel isSortMode={isSortMode}>
    <PanelContent>
      <ActionButtonContainer style={{ padding: "0px 27px 0px 0px" }}>
        <BtnWrapper>
          <StyledButton
            disabled
            type="link"
            shape="circle"
            icon={<BgColorsOutlined />}
          />
        </BtnWrapper>
      </ActionButtonContainer>
      <MainActionButtonContainer
        isSortMode={isSortMode}
        onClick={isSortMode ? toggleSetSortMode : toggleMenuDrawer}
      >
        <MainActionButton
          isSortMode={isSortMode}
          type={isSortMode ? "default" : "primary"}
          shape="circle"
          icon={<PlusOutlined />}
        />
      </MainActionButtonContainer>
      <ActionButtonContainer style={{ padding: "0px 0px 0px 27px" }}>
        <BtnWrapper>
          <StyledButton
            type="link"
            onClick={toggleSetSortMode}
            shape="circle"
            icon={<ColumnHeightOutlined />}
          />
        </BtnWrapper>
      </ActionButtonContainer>
    </PanelContent>
  </Panel>
);

export default ControlPanel;