import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #fff;
`;

export const Size = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 17px;
  width: 39px;
  height: 37px;
  color: #b5b5b5;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #0c207219;
  border: 1px solid #b5b5b5;
  border-radius: 6px;
  cursor: pointer;
  ${(props) =>
    props.selected &&
    css`
      background-color: #b5b5b5;
      color: #fff;
    `}
  @media(max-width: 768px) {
    width: 18px;
    height: 19px;
    margin-right: 8px;
    font-size: 9px;
  }
`;
