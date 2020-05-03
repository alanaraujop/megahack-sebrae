import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";

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

const Modal = (props, ref) => {
  const {
    textConfirm = "FECHAR PEDIDO",
    textChooseMore = "ESCOLHER MAIS",
    onConfirm,
    onClose,
    children,
    title,
    footer,
    // show,
    maxHeight,
    FooterHeight,
  } = props;

  const [show, setShow] = useState(true);

  useImperativeHandle(ref, () => ({
    setShow,
  }));

  useEffect(() => {
    if (show)
      document.querySelector("body").setAttribute("style", "overflow: hidden");
    else document.querySelector("body").removeAttribute("style");
  }, [show]);

  const handleClose = () => {
    setShow(false);
    onClose && onClose();
  };

  const handleConfirm = () => {
    onConfirm && onConfirm();
  };

  return (
    <Container show={show}>
      <Content
        full={props.full}
        onClick={(e) => e.stopPropagation(e)}
        maxHeight={maxHeight}
      >
        <Header color="primary">
          <Title>{title}</Title>
          <Close onClick={handleClose} />
        </Header>
        <Body>{children}</Body>
        <Footer height={FooterHeight}>
          {footer || (
            <>
              <Button
                // border={`2px solid ${theme.primaryColor}`}
                onClick={handleClose}
              >
                {textChooseMore}
              </Button>
              <Button nClick={handleConfirm}>{textConfirm}</Button>
            </>
          )}
        </Footer>
      </Content>
    </Container>
  );
};

export default forwardRef(Modal);
