import React, { useEffect, useState } from "react";
import * as S from "./HeaderStyled";
import VivaLogo from "../../../assets/images/VivaVitrine.png";
import cartImage from "../../../assets/images/cart.svg";
import fittingImage from "../../../assets/images/provador.svg";
import { useLocation } from "react-router-dom";

const buttonsOptions = {
  cart: {
    routeName: "carrinho",
    buttonText: "CARRINHO",
    buttonIcon: cartImage,
    show: true,
  },
  fitting: {
    routeName: "provador",
    buttonText: "PROVADOR",
    buttonIcon: fittingImage,
    show: true,
  },
  hide: {
    show: false,
  },
};

const Header = () => {
  const location = useLocation();
  const [redirectPage, setRedirectPage] = useState();

  useEffect(() => {
    switch (location.pathname) {
      case "/provador":
        setRedirectPage(buttonsOptions.cart);
        break;
      case "/":
        setRedirectPage(buttonsOptions.hide);
        break;
      default:
        setRedirectPage(buttonsOptions.fitting);
    }
  }, [location]);

  return (
    <S.Header>
      <S.Logo src={VivaLogo} alt="BrandLogo" />
      {redirectPage?.show ? (
        <S.ButtonRedirect to={redirectPage?.routeName}>
          {redirectPage?.buttonText}
          <img
            src={redirectPage?.buttonIcon}
            alt={redirectPage?.buttonText}
            width="30px"
          />
        </S.ButtonRedirect>
      ) : (
        ""
      )}
    </S.Header>
  );
};

export default Header;
