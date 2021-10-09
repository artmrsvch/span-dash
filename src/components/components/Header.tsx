import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import classNames from "classnames";
import { ConstructorStorage } from 'src/components/useConstructor';
import { LOCAL_VAR_NAME } from 'src/components/constants';

const HeaderContainer = styled.div`
  width: 100%;
  height: 54px;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  -webkit-box-shadow: 0 0 20px rgb(0 0 0 / 10%);
  box-shadow: 0 0 20px rgb(0 0 0 / 10%);
  border-bottom: 1px solid #eee;
  -webkit-transition: background-color 0.3s ease;
  -o-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
  overflow: hidden;

  .header-sorted-mode {
    transform: translateY(-50%);
    background-color: rgb(247, 247, 250);
  }
  .header-sorted-mode__text {
    justify-content: center;
    font-size: 16px;
  }
`;
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 50%;
  padding: 0 10px;
`;

const MoveContainer = styled.div`
  width: 100%;
  height: 200%;
  -webkit-transition: -webkit-transform 0.3s ease;
  transition: -webkit-transform 0.3s ease;
  -o-transition: transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
`;

interface HeaderProps {
  isSortMode: boolean;
  store: ConstructorStorage
}

const Header: React.FC<HeaderProps> = ({ isSortMode, store }) => {
  const onSave = () => {
    const stringify = JSON.stringify(store)

    localStorage.setItem(LOCAL_VAR_NAME, stringify)
  };
  return (
    <HeaderContainer>
      <MoveContainer
        className={classNames({ "header-sorted-mode": isSortMode })}
      >
        <HeaderContent>
          <Button type="primary" onClick={onSave}>
            Сохранить
          </Button>
        </HeaderContent>
        <HeaderContent
          className={classNames({ "header-sorted-mode__text": isSortMode })}
        >
          Режим сортировки
        </HeaderContent>
      </MoveContainer>
    </HeaderContainer>
  );
};

export default Header;
