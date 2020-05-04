import styled from "styled-components";

const ButtonControl = styled.span`
  padding: 10px;
  border-radius: 50%;
  background-color: #fff;
  height: 40px;
  width: 45px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px #00000029;
  cursor: pointer;
`;

const ControlImage = styled.img`
  width: 15px;
  src: ${(props) => props.src};
  transform: ${(props) => (props.invert ? "rotateY(190deg)" : "none")};
`;

export { ButtonControl, ControlImage };
