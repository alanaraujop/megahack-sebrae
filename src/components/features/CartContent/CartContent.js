import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import CardHorizontal from "../../modules/CardHorizontal";
import { ActionsCart } from "../../../store/actions";
import { formatMoney } from "../../../helpers";
import { Button } from "../../elements";
import { Content, CardContainer, Total, Row, MoreItems } from "./styles";
import { useHistory } from "react-router-dom";
import Products from "../../../mocks/Products";
import { useMedia } from "../../../hooks/useMedia";
const generateProductsList = (cart) =>
  cart.reduce(
    (acum, item, index) => `${acum}
  *[ ${index} ]* - ${item.name} | *TAMANHO* - ${item.size}%0a`,
    ""
  );

export default function CartContent() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const history = useHistory();

  const { isSmall } = useMedia();

  const whatsappNumber = "5521984623153";
  const text = `*PRODUTOS:*%0a
  -----------------%0a${generateProductsList(cart)}`;
  useEffect(() => {
    dispatch(ActionsCart.insertItemCart(Products[0]));
    dispatch(ActionsCart.insertItemCart(Products[1]));
  }, []);

  const handleRemoveItemCart = (id) => {
    dispatch(ActionsCart.removeItemCart(id));
  };

  const handleSetSize = ({ size, id }) => {
    dispatch(ActionsCart.setSizeItemCart({ size, id }));
  };

  const getTotal = () => cart.reduce((acum, item) => item.price + acum, 0);

  const closeOrder = () => {
    dispatch(ActionsCart.clearCart());
    window.open(
      `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`,
      "_blank"
    );
    history.push("/");
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
      {cart.length > 0 && (
        <>
          <Row>
            <Total>TOTAL DO PEDIDO</Total>
            <Total>{formatMoney(getTotal())}</Total>
          </Row>
          <MoreItems onClick={() => history.push("/")}>
            SELECIONAR MAIS PEÇAS
          </MoreItems>
          <Button
            action={closeOrder}
            style={{
              margin: "20px 0",
              height: !isSmall ? "83px" : "47px",
              maxWidth: "396px",
              width: "80%",
              borderRadius: "42px",
              fontSize: !isSmall ? "25px" : "13px",
            }}
          >
            FECHAR PEDIDO
          </Button>
        </>
      )}
    </Content>
  );
}
