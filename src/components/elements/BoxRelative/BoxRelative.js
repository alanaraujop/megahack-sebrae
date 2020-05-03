import React from "react";
import styled from "styled-components";

const Box = styled.div`
  position: relative;
  ${props => props.style}
`;

export default function BoxRelative({ children, style }) {
  return <Box style={style}>{children}</Box>;
}
