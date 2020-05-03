import React from "react";

import {
  CardContainer,
  ImageProduct,
  InfoContainer,
  Description,
  Price,
  Row,
  ButtonDelete,
} from "./styles";
import { formatMoney } from "../../../helpers";

export default function CardHorizontal(props) {
  const { price = 0, quantity = 0, description, image = {}, onDelete } = props;
  return (
    <CardContainer>
      <Row>
        <ImageProduct src={image} alt="" />
        <InfoContainer>
          <Description>{description}</Description>
          <Price>
            {formatMoney(price.toFixed(2) * parseInt(quantity || 1))}
          </Price>
        </InfoContainer>
      </Row>
      <Row>
        {!!onDelete && <ButtonDelete onClick={onDelete}>Excluir</ButtonDelete>}
      </Row>
    </CardContainer>
  );
}
