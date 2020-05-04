import styled from "styled-components";

export const ColumnList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const ColorItem = styled.span`
  cursor: pointer;
  background-color: ${(props) => props.color};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 5px;
`;
