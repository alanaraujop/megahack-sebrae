import styled from "styled-components";

const ImageArrow = styled.img`
  width: 18px;
  height: 18px;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 40px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  margin: 5px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
`;

const ContainerQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #e8e8e8;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
const CardContainer = styled.div`
  width: 100%;
`;
export { ImageArrow, ContainerQuantity, Quantity, Content, Row, CardContainer };
