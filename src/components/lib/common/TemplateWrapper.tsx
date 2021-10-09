import React, { ReactNode } from "react";
import styled from "styled-components";

interface TemplateWrapperProps {
  header?: ReactNode;
  footer?: ReactNode;
}

const BottomControls = styled.div`
  width: 100%;
  padding: 16px;
  border-top: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 16px;
  border-bottom: 1px solid #f2f2f2;
  width: 100%;
`;
const Content = styled.div`
  padding: 16px;
`;

const TemplateWrapper: React.FC<TemplateWrapperProps> = ({
  footer,
  header,
  children,
}) => {
  return (
    <div>
      {header && <HeaderContainer>{header}</HeaderContainer>}
      <Content>{children}</Content>
      {footer && <BottomControls>{footer}</BottomControls>}
    </div>
  );
};

export default TemplateWrapper;
