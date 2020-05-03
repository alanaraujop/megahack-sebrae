import React from "react";
import VivaLogo from "../../assets/images/VivaVitrine.png";
import Icones from "../../assets/images/icones";
import ClothesProduct from "../../assets/images/clothes";

import {
  Logo,
  ViewProducts,
  Filter,
  Description,
  ProdutctIcon,
  List,
  ClothesCard,
  Clothes,
} from "./styles";

export default function Products() {
  return (
    <ViewProducts>
      <Logo src={VivaLogo} alt="Logo Viva Vitrine" />
      <Filter>
        {Icones.map((item, index) => (
          <ProdutctIcon key={index} src={item} alt="Icone do Filtro" />
        ))}
      </Filter>
      <Description>
        Para levar as Roupas ao provador digital, bastar <i>marcar elas com o
        coração</i>, em seguida ir para o Provador.
      </Description>
      <List>
        {ClothesProduct.map((item, index) => (
          <ClothesCard>
            <Clothes key={index} src={item} alt="Icone do Filtro" />
          </ClothesCard>
        ))}
      </List>
    </ViewProducts>
  );
}
