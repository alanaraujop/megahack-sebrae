import React from "react";

import { Description } from "./Cart.styles";
import CartContent from "../../components/features/CartContent/CartContent";

export default function Cart() {
  return (
    <>
      <Description>
        AS PEÇAS MARCADAS COM CORAÇÃO ESTÃO AQUI, AGORA É PEDIR PARA SUA
        VENDEDORA SEPARAR ELAS PARA VOCÊ !
      </Description>
      <CartContent />
    </>
  );
}
