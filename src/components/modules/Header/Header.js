import React, { useEffect, useState } from "react";
import * as S from "./HeaderStyled";
import VivaLogo from "../../../assets/images/VivaVitrine.png";
import cartImage from "../../../assets/images/cart.svg";
import fittingImage from "../../../assets/images/provador.svg";
import { useLocation, Link } from "react-router-dom";
import {useMedia} from "../../../hooks/useMedia";

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
  const { isSmall } = useMedia();

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
      <Link to="/">
       <S.Logo src={VivaLogo} alt="BrandLogo" />
       </Link>
      {redirectPage?.show ? (
         <S.ButtonRedirect to={redirectPage?.routeName} style={isSmall ? {width: "40px"} : {width: "200px"} }>
          {isSmall ? "" : redirectPage?.buttonText}
          <img
            src={redirectPage?.buttonIcon}
            alt={redirectPage?.buttonText}
            width={"30px"}
            style={isSmall ? {margin: "0 auto"} : {marginLeft: "20px"} }
          />
        </S.ButtonRedirect>
      ) : (
        ""
      )}
    </S.Header>
  );
};

export default Header;
