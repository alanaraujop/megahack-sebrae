import React from "react";

import { useDispatch } from "react-redux";
import Modal from "../../modules/Modal/Modal";
import CardHorizontal from "../../modules/CardHorizontal";
import { ActionsCart } from "../../../store/actions";
import assets from "./assets";
import Button from "../../elements/Button";
import {
  ImageArrow,
  ContainerQuantity,
  Quantity,
  Content,
  Row,
  CardContainer,
} from "./styles";

export default function Cart(props) {
  const { onClose, show, products, onConfirm } = props;
  const dispatch = useDispatch();

  const handleInsertItemCart = (item) => {
    onClose();
    dispatch(ActionsCart.insertItemCart(item));
  };

  const handleClose = () => {
    onClose();
  };

  const incQuantity = (product) => {
    dispatch(ActionsCart.incrementItemCart(product.id));
  };

  const decQuantity = (product) => {
    dispatch(ActionsCart.decrementItemCart(product.id));
  };

  const handleRemoveItemCart = (product) => {
    dispatch(ActionsCart.removeItemCart(product.id));
  };

  return (
    <Content>
      {products.map((product, index) => (
        <CardContainer key={product.id}>
          <CardHorizontal
            {...product}
            quantity={product.quantity}
            onClick={() => handleInsertItemCart(product)}
          />

          <Row>
            <Button
              style={{ marginLeft: 15, color: "#8B8787" }}
              width="200px"
              height="35px"
              backgroundColor={"#FFF"}
              border={"2px solid #E8E8E8"}
              action={() => handleRemoveItemCart(product)}
            >
              <Row>
                <h1>Excluir Item</h1>
                <ImageArrow src={assets.trash} />
              </Row>
            </Button>

            <ContainerQuantity>
              <Button
                width="40px"
                height="40px"
                action={() => decQuantity(product)}
                disabled={product.quantity === 1}
              >
                <ImageArrow src={assets.remove} />
              </Button>
              <Quantity>{product.quantity}</Quantity>
              <Button
                width="40px"
                height="40px"
                action={() => incQuantity(product)}
              >
                <ImageArrow src={assets.add} />
              </Button>
            </ContainerQuantity>
          </Row>
        </CardContainer>
      ))}
    </Content>
  );
}
