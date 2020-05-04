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
  @media (max-width: 768px) {
    height: 92px;
    padding: 16px;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ButtonDelete = styled.img.attrs({ src: icones.lixeira })`
  height: 13px;
  color: #9e9e9e;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 13px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex: 1 1;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin: 25px;
  @media (max-width: 768px) {
    margin: 0 0 0 12px;
  }
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
  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

const Price = styled.p`
  text-align: center;
  font: Light 20px/30px Poppins;
  letter-spacing: 2.4px;
  color: #b5b5b5;
  @media (max-width: 768px) {
    font-size: 9px;
  }
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
