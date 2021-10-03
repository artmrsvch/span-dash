import styled from "styled-components";
import { Button } from "antd";

export const Panel = styled.div<{ isSortMode: boolean }>`
  background: #fff;
  height: 54px;
  position: absolute;
  bottom: 16px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 10;
  border-radius: 100px;
  -webkit-transition: width 0.3s ease, -webkit-box-shadow 0.3s ease;
  -o-transition: width 0.3s ease, box-shadow 0.3s ease;
  transition: width 0.3s ease, box-shadow 0.3s ease,
    -webkit-box-shadow 0.3s ease;

  ${({ isSortMode }) =>
    isSortMode
      ? "width: 62px; box-shadow: none;"
      : `width: 198px; box-shadow: 1px 1px 12px rgb(0 0 0 / 8%);`}
`;
export const PanelContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition: opacity 0.3s ease;
  -o-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
`;
export const ActionButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
`;

export const BtnWrapper = styled.div`
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease, transform 0.2s ease, -webkit-transform 0.2s ease;
  padding: 0 26px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledButton = styled(Button)`
  width: 20px;
  min-width: 20px;
  border-color: white;
  box-shadow: none;
`;
export const MainActionButtonContainer = styled.div<{ isSortMode: boolean }>`
  box-sizing: border-box;
  position: absolute;
  top: -4px;
  left: calc(50% - 31px);
  border-radius: 50%;
  cursor: pointer;
  border: 3px solid #fff;
  transition: transform 0.3s ease, background-color 0.3s ease,
    box-shadow 0.3s ease, -webkit-transform 0.3s ease,
    -webkit-box-shadow 0.3s ease;

  ${({ isSortMode }) =>
    isSortMode
      ? "transform: rotate(135deg); box-shadow: 1px 1px 12px rgb(0 0 0 / 8%);"
      : ""}
`;

export const MainActionButton = styled(Button)<{ isSortMode: boolean }>`
  width: 56px;
  height: 56px;
`;
