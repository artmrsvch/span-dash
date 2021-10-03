import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ComponentEditState, Id } from "src/components/types";
import { Actions } from "src/components/useConstructor";
import { Li, Container, Content, SvgWrapper, Name } from "./styled";

interface BlockListItemProps {
  setComponent: (props: ComponentEditState) => void;
  name: string;
  id: Id;
  Icon: any;
}

const BlockListItem: React.FC<BlockListItemProps> = ({
  setComponent,
  name,
  id,
  Icon,
}) => (
  <Li>
    <Container>
      <SvgWrapper>
        <Icon />
      </SvgWrapper>
      <Content>
        <Name>{name}</Name>
      </Content>
      <Button
        icon={<PlusOutlined />}
        type="link"
        onClick={() => setComponent({ id, action: Actions.ADD_COMPONENT })}
      />
    </Container>
  </Li>
);

export default BlockListItem;
