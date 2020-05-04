import React from "react";
import Icones from "../../assets/images/icones";
import ClothesProduct from "../../mocks/Products";
import Love from "../../assets/images/icones/love.svg";

import {
  Filter,
  HowToUse,
  ProdutctIcon,
  List,
  ClothesCard,
  Like,
  Clothes,
  Description,
} from "./Products.styles";

export default function Products() {
  return (
    <>
      <Filter>
        {Icones.categorias.map((item, index) => (
          <ProdutctIcon key={index} src={item} alt="Icone do Filtro" />
        ))}
      </Filter>
      <HowToUse>
        Para levar as Roupas ao provador digital, bastar <i>marcar elas com o
        coração</i>, em seguida ir para o Provador.
      </HowToUse>
      <List>
        {ClothesProduct.map((item, index) => (
          <ClothesCard>
            <Like src={Love} alt="like" />
            <Clothes key={index} src={item.image} alt="Icone do Filtro" />
            <Description>
              <p>{`${item.cod}`}</p>
              <p><b>{`${item.name}`}</b></p>
              <p>{`R$ ${item.price}`}</p>
            </Description>
          </ClothesCard>
        ))}
      </List>
    </>
  );
}
