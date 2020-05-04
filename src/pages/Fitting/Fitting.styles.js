import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 100px;
`;

const ClothesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 570px;
`;

const ClothesList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageClothe = styled.img`
  height: 100%;
  width: auto;
`;

const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Body = styled.img`
  height: 500px;
  margin: 0 30px;
`;

const ButtonMore = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #00000029;
  font-size: 18px;
  color: #9A9A9A;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  Container,
  ClothesContainer,
  ClothesList,
  ImageClothe,
  BodyContainer,
  Body,
  ButtonMore
}