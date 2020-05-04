import React from "react";

import { useDispatch, useSelector } from "react-redux";
import CardHorizontal from "../../modules/CardHorizontal";
import { ActionsCart } from "../../../store/actions";
import { Content, CardContainer } from "./styles";

export default function CartContent() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveItemCart = (id) => {
    dispatch(ActionsCart.removeItemCart(id));
  };

  const handleSetSize = ({ size, id }) => {
    dispatch(ActionsCart.setSizeItemCart({ size, id }));
  };

  return (
    <Content>
      {cart.map((product, index) => (
        <CardContainer key={product.id}>
          <CardHorizontal
            product={product}
            setSize={(size) => handleSetSize({ size, id: product.id })}
            quantity={product.quantity}
            onRemove={() => handleRemoveItemCart(product.id)}
          />
        </CardContainer>
      ))}
    </Content>
  );
}
