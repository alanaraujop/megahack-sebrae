import React from "react";
import * as S from "./HeaderStyled";
import VivaLogo from "../../../assets/images/VivaVitrine.png";

const Header = () => (
  <S.Header>
    <S.Logo src={VivaLogo} alt="BrandLogo" />
  </S.Header>
);

export default Header;
