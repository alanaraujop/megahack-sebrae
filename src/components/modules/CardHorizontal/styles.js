import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  /* align-items: center; */
  max-width: 400px;
  flex-direction: column;
  margin: auto;
  width: 100%;
  flex: 1;
  justify-content: center;
  :not(:first-child) {
    border-top: solid #e8e8e8 2px;
    margin-top: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonDelete = styled.button`
  flex: 1;
  height: 30px;
  background-color: #fff;
  border: solid #e8e8e8 2px;
  color: #9e9e9e;
  border-radius: 4px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 2;
  margin: 8px;
  justify-content: center;
  flex-direction: column;
`;

const ImageProduct = styled.div`
  flex: 1;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: contain;
  margin: 5px;
  background-repeat: no-repeat;
  height: 25vw;
  max-height: 100px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.11);
  border-radius: 2px;
`;

const Description = styled.p`
  margin: 20px 0 10px;
  text-align: flex-start;
  /* font-family: unset; */
  font-family: Roboto;

  font-style: normal;
  font-weight: 480;
  font-size: 12px;
  line-height: 15px;
  height: 45px;
`;

const Price = styled.p`
  text-align: flex-start;
  /* font-family: unset; */
  font-family: Roboto;

  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
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
