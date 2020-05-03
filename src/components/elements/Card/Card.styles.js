import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: #00000047 0px 0px 5px 0px;
  ${props => props.style}
`;
