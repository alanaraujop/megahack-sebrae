import React from "react";
import { Container } from "./Card.styles";

export default function Card({ children, style }) {
  return <Container style={style}>{children}</Container>;
}
