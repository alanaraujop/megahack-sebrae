import React from "react";
import { ColumnList, ColorItem } from "./ColorSelect.styles";

export default function ColorSelect({ colors, onClick }) {
  return (
    <ColumnList>
      {colors.map((color, key) => (
        <ColorItem key={key} color={color} onClick={() => onClick(color)} />
      ))}
    </ColumnList>
  );
}
