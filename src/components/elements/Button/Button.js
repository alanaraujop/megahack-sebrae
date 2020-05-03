import styled from "styled-components";

export const Button = styled.button`
  padding: 0px;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "36px")};
  min-height: ${(props) => (props.height ? props.height : "36px")};
  border: ${(props) => props.border || "none"};
  outline: none;
  cursor: pointer;
  font-size: 12px;
  font-family: Raleway, sans-serif;
  color: ${(props) =>
    props.inverse ? (props.disabled ? "#ccc" : props.color) : "#fff"};
  font-weight: 700;
  border-radius: 4px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#3f51b5"};
  /* text-transform: uppercase; */
  margin: 10px 0px;
`;
