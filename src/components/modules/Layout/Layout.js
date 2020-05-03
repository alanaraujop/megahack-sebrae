import React from "react";
import * as S from "./LayoutStyled";
import Header from "../Header/Header";

const Layout = ({ children, ...props }) => {
  return (
    <S.Container {...props}>
      <Header/>
      {children}
    </S.Container>
  )
}

export default Layout
