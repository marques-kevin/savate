import styled from "react-emotion";

export const Container = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const height = 34;
const padding = 4;

export const Switcher = styled.div`
  height: 34px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  border-radius: 34px;
  position: relative;
`;

export const Value = styled.div`
  padding: 0 20px;
  transition: all 0.3s ease;
  color: ${({ theme, current }) =>
    current ? theme.colors.black : theme.colors.gray};
  position: relative;
  z-index: 2;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
`;

export const Indicator = styled.div`
  position: absolute;
  z-index: 1;
  width: calc(50% - ${padding}px);
  top: 0;
  bottom: 0;
  background-color: white;
  border-radius: ${height - padding * 2}px;
  height: ${height - padding * 2}px;
  margin: auto;
  transition: all 0.3s ease;
  transform: ${({ left }) =>
    left
      ? `translateX(${padding}px)`
      : `translateX(calc(100% + ${padding}px))`};
`;
