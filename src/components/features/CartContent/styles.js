import styled from "styled-components";

const ContainerQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Content = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 30px 0;
`;
const CardContainer = styled.div`
  width: 100%;
`;

const TotalContainer = styled.div`
  width: 100%;
`;

const Total = styled.p`
  font: 25px Poppins;
  letter-spacing: 3px;
  color: #707070;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
const MoreItems = styled.p`
  margin-top: 20px;
  font: Light 20px Poppins;
  letter-spacing: 2.4px;
  color: #9e003d;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export {
  TotalContainer,
  Total,
  ContainerQuantity,
  Content,
  Row,
  CardContainer,
  MoreItems,
};
