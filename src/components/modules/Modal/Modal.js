import React, { useEffect } from "react";

import {
  Container,
  Content,
  Close,
  Header,
  Title,
  Body,
  Footer,
} from "./styles";

import Button from "../../elements/Button";

const Modal = (props) => {
  const {
    textConfirm = "FECHAR PEDIDO",
    textChooseMore = "ESCOLHER MAIS",
    onConfirm,
    onClose,
    children,
    title,
    footer,
    show,
    maxHeight,
    FooterHeight,
  } = props;

  useEffect(() => {
    if (show)
      document.querySelector("body").setAttribute("style", "overflow: hidden");
    else document.querySelector("body").removeAttribute("style");
  }, [show]);

  return (
    <Container show={show}>
      <Content
        full={props.full}
        onClick={(e) => e.stopPropagation(e)}
        maxHeight={maxHeight}
      >
        <Header>
          <Title>{title}</Title>
          <Close onClick={onClose} />
        </Header>
        <Body>{children}</Body>
        <Footer height={FooterHeight}>
          {footer || (
            <>
              <Button
                // border={`2px solid ${theme.primaryColor}`}
                width={"120px"}
                onClick={onClose}
              >
                {textChooseMore}
              </Button>
              <Button width={"120px"} onClick={onConfirm}>
                {textConfirm}
              </Button>
            </>
          )}
        </Footer>
      </Content>
    </Container>
  );
};

export default Modal;
