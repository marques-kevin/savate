import styled from "react-emotion";

export const Container = styled.header`
  position: relative;
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 15px;
  box-shadow: 0 5px 7px rgba(black, 0.02);
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: semibold;
  width: 100%;
  text-align: center;
`;

export const Back = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  padding: 0 15px;
  cursor: pointer;
`;
