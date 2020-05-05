import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  z-index: 10;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: sticky;
  height: 120px;
  top: 0;
  box-shadow: 4px 4px 20px 2px rgba(144, 137, 130, 0.3);
  @media (max-width: 768px) {
    box-sizing: none;
    height: 80px;
  }
`;

export const Logo = styled.img`
  height: 89px;
  @media (max-width: 768px) {
    height: 60px;
  }
`;

export const ButtonRedirect = styled(Link)`
  width: 200px;
  height: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #00000029;
  border: 1px solid #ffc410;
  border-radius: 35px;
  opacity: 1;
  color: #b4b4b4;
  font: Light 17px/26px Poppins;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 40px;
  padding: 0 10px;
  text-transform: uppercase;

  img {
    margin-left: 20px;
  }
`;
