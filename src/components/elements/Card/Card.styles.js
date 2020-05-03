import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 40px #0C207219;
  ${props => props.style}
`;
