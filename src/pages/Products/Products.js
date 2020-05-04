import React, { useState } from "react";
import Icones from "../../assets/images/icones";
import ProductClothes from "../../mocks/Products";
import Love from "../../assets/images/icones/love.svg";
import LoveTwo from "../../assets/images/icones/loveTwo.svg";
import { useSelector, useDispatch } from "react-redux";
import { ActionsCart } from "../../store/actions";
import { formatMoney } from "../../helpers";

import {
  ViewProducts,
  Filter,
  HowToUse,
  ProdutctIcon,
  List,
  ClothesCard,
  Like,
  Clothes,
  Description,
} from "./Products.styles";

export default function Products(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [ClothesProduct, setClothesProduct] = useState(ProductClothes);

  const verifyItemCart = (item) => {
    return cart.find((_item) => item.id === _item.id);
  };

  const toggleItemCart = (item) => {
    if (verifyItemCart(item)) {
      dispatch(ActionsCart.removeItemCart(item.id));
    } else {
      dispatch(ActionsCart.insertItemCart(item));
    }
  };

  return (
    <>
      <ViewProducts>
        <Filter>
          {Icones.categorias.map((item, index) => (
            <ProdutctIcon
              key={index}
              src={item.image}
              onClick={() =>
                setClothesProduct(
                  ProductClothes.filter(
                    (icon) => icon.category === item.category
                  )
                )
              }
              alt={item.category}
              title={item.category}
            />
          ))}
        </Filter>
        <HowToUse>
          Para levar as Roupas ao provador digital, bastar{" "}
          <i>marcar elas com o coração</i>, em seguida ir para o Provador.
        </HowToUse>
        <List>
          {ClothesProduct.map((item, index) => (
            <ClothesCard>
              <Like
                src={!verifyItemCart(item) ? Love : LoveTwo}
                alt="like"
                disabled={!verifyItemCart(item)}
                onClick={() => toggleItemCart(item)}
              />
              <Clothes key={index} src={item.image} alt="Icone do Filtro" />
              <Description>
                <p>{`${item.cod}`}</p>
                <p>
                  <b>{`${item.name}`}</b>
                </p>
                <p>{formatMoney(item.price.toFixed(2) * parseInt(1))}</p>
              </Description>
            </ClothesCard>
          ))}
        </List>
      </ViewProducts>
    </>
  );
}
