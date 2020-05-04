import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 100px;
`;

export const ClothesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 570px;
`;

export const ClothesList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ImageClothe = styled.img`
  height: 100%;
  width: auto;
`;

export const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.img`
  height: 500px;
  margin: 0 30px;
`;
