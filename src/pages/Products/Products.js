import React from "react";
import Icones from "../../assets/images/icones";
import ClothesProduct from "../../mocks/Products";

import {
  Filter,
  Description,
  ProdutctIcon,
  List,
  ClothesCard,
  Clothes,
} from "./Products.styles";

export default function Products() {
  return (
    <>
      <Filter>
        {Icones.categorias.map((item, index) => (
          <ProdutctIcon key={index} src={item} alt="Icone do Filtro" />
        ))}
      </Filter>
      <Description>
        Para levar as Roupas ao provador digital, bastar{" "}
        <i>marcar elas com o coração</i>, em seguida ir para o Provador.
      </Description>
      <List>
        {ClothesProduct.map((item, index) => (
          <ClothesCard>
            <Clothes key={index} src={item.image} alt="Icone do Filtro" />
          </ClothesCard>
        ))}
      </List>
    </>
  );
}
