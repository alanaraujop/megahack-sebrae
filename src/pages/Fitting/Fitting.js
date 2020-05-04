import React from "react";
import ColorSelect from "../../components/modules/ColorSelect/ColorSelect";
import {
  Container,
  ClothesContainer,
  ClothesList,
  ImageClothe,
  BodyContainer,
  Body,
} from "./Fitting.styles";
import { useSelector } from "react-redux";
import Typography from "../../components/elements/Typography/Typography";
import { Card } from "../../components/elements";
import body from "../../assets/images/Sombra.svg";

export default function Fitting() {
  const cart = useSelector((state) => state.cart);

  return (
    <Container>
      <ClothesContainer>
        <Typography
          text="subtitle"
          color="#B5B5B5"
          style={{
            letterSpacing: "3px",
            maxWidth: "420px",
            textAlign: "center",
            marginBottom: "15px",
          }}
        >
          PARA PROVAR BASTA ARRASTAR AS PEÇAS PARA O MANEQUIM.
        </Typography>
        <ClothesList>
          {cart.map((item, key) => {
            console.log(item);
            return (
              <Card
                key={key}
                style={{
                  width: "150px",
                  height: "170px",
                  margin: "10px 20px",
                  boxShadow: "0px 0px 40px #0C207219",
                }}
              >
                <ImageClothe src={item.image} />
              </Card>
            );
          })}
          <Card>

          </Card>
        </ClothesList>
      </ClothesContainer>
      <BodyContainer>
        <Body src={body} alt="body" />
        <ColorSelect
          colors={["#f4c691", "#8A4A26", "#FFBB94"]}
          onClick={(color) => console.log(color)}
        />
      </BodyContainer>
    </Container>
  );
}
