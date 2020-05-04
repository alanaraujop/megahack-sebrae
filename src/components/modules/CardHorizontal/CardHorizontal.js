import React from "react";

import {
  CardContainer,
  ImageProduct,
  InfoContainer,
  Description,
  Price,
  Row,
  ButtonDelete,
} from "./CardHorizontal.styles";
import { formatMoney } from "../../../helpers";
import SelectSize from "../../elements/SelectSize";

export default function CardHorizontal(props) {
  const { onRemove, product, setSize } = props;

  const { price, quantity = 1, description, image, size } = product;

  return (
    <CardContainer>
      <ImageProduct src={image} alt="" />
      <InfoContainer>
        <Row>
          <Description>{description}</Description>
          <ButtonDelete onClick={onRemove} />
        </Row>
        <Row>
          <SelectSize size={size} setSelect={setSize} />
          <Price>
            {formatMoney(price.toFixed(2) * parseInt(quantity || 1))}
          </Price>
        </Row>
      </InfoContainer>
    </CardContainer>
  );
}
