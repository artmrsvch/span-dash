import styled from 'styled-components';

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background-color: #fff;
  margin: 0 8px 0 0;
`;
export const Li = styled.li`
  margin: 8px 0;
`;
export const Container = styled.a`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  background-color: #f5f5f5;
`;
export const Content = styled.div`
  width: calc(100% - 34px);
  display: flex;
  align-items: center;
`;
export const Name = styled.div`
  color: rgb(51, 51, 51);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;