import React from "react";
import ReactCardCarousel from "react-card-carousel";
import BoxRelative from "../../elements/BoxRelative/BoxRelative";
import seta from "../../../assets/images/seta_1.svg";
import { ButtonControl, ControlImage } from "./CarouselCard.styles";
import { useMedia } from "../../../hooks/useMedia";

export default function CarouselCard(props) {
  const { children, reference, style, prev, next } = props;
  const { isSmall } = useMedia();

  return (
    <BoxRelative
      style={{
        ...style,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minWidth: isSmall ? "270px" : "505px",
        cursor: "default",
      }}
    >
      <ButtonControl onClick={() => prev()}>
        <ControlImage src={seta} alt="prev" />
      </ButtonControl>
      <ReactCardCarousel
        {...props}
        ref={reference}
        onMouseEnter={console.log("aa")}
      >
        {children}
      </ReactCardCarousel>
      <ButtonControl onClick={() => next()}>
        <ControlImage src={seta} alt="next" invert />
      </ButtonControl>
    </BoxRelative>
  );
}
