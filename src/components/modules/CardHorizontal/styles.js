import styled from "styled-components";
import icones from "../../../assets/images/icones";

const CardContainer = styled.div`
  display: flex;
  max-width: 800px;
  position: relative;
  margin: 14px auto;
  padding: 7px 57px;
  width: 100%;
  height: 190px;
  flex: 1;
  box-sizing: border-box;
  box-shadow: ${(props) => props.theme.shadows[0]};
  justify-content: center;
  background-color: #fff;
  /* :not(:first-child) {
    border-top: solid #e8e8e8 2px;
    margin-top: 20px;
  } */
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ButtonDelete = styled.img.attrs({ src: icones.lixeira })`
  height: 18px;
  color: #9e9e9e;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  flex: 1 1;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin: 25px;
`;

const ImageProduct = styled.img`
  margin: 5px;
  height: 100%;
  object-fit: contain;
`;

const Description = styled.p`
  text-align: center;
  font: SemiBold 20px/30px Poppins;
  letter-spacing: 2.4px;
  color: #b5b5b5;
  text-transform: uppercase;
`;

const Price = styled.p`
  text-align: center;
  font: Light 20px/30px Poppins;
  letter-spacing: 2.4px;
  color: #b5b5b5;
`;

export {
  CardContainer,
  ImageProduct,
  Description,
  Price,
  InfoContainer,
  Row,
  ButtonDelete,
};
