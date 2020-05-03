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
        <ImageProduct src={image.src} alt="" />
        <InfoContainer>
          <Description>{description}</Description>
          <Price>
            R$
            {formatMoney(
              parseFloat(price.replace(",", ".")).toFixed(2) *
                parseInt(quantity)
            )}
          </Price>
        </InfoContainer>
      </Row>
      <Row>
        {!!onDelete && <ButtonDelete onClick={onDelete}>Excluir</ButtonDelete>}
      </Row>
    </CardContainer>
  );
}
