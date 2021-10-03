import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const ConstructorContainer = styled.div`
  position: relative;
  margin: auto;
  width: 375px!important;
  max-width: 100%;
  height: 700px;
  max-height: 100%;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 2px 30px 0 rgb(0 0 0 / 8%);
  transform: translateZ(0);
  transition: filter 0.6s ease;
`;
