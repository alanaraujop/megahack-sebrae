import React from "react";

import { Description } from "./Cart.styles";
import CartContent from "../../components/features/CartContent/CartContent";
import { useMedia } from "../../hooks/useMedia";

export default function Cart() {
  const { isSmall } = useMedia();

  return (
    <>
      <Description>
        {isSmall
          ? "CARRINHO"
          : "AS PEÇAS MARCADAS COM CORAÇÃO ESTÃO AQUI, AGORA É PEDIR PARA SUA VENDEDORA SEPARAR ELAS PARA VOCÊ !"}
      </Description>
      <CartContent />
    </>
  );
}
