import React from "react";
import { Container, Size } from "./SelectSize.styles";

const sizes = ["P", "M", "G"];

export default function SelectSize({ setSelect, size }) {
  const isSelected = (sizeSelected, currentSize) => {
    return sizeSelected === currentSize;
  };
  return (
    <Container>
      {sizes.map((item) => (
        <Size selected={isSelected(size, item)} onClick={() => setSelect(item)}>
          {item}
        </Size>
      ))}
    </Container>
  );
}
