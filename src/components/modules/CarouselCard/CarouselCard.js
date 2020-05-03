import React from "react";
import ReactCardCarousel from "react-card-carousel";

export default function CarouselCard(props) {
  const { children, reference } = props;

  return (
    <ReactCardCarousel
      {...props}
      ref={reference}
    >
      {children}
    </ReactCardCarousel>
  );
}
