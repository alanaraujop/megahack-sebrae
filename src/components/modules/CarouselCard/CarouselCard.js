import React from "react";
import ReactCardCarousel from "react-card-carousel";
import BoxRelative from "../../elements/BoxRelative/BoxRelative";

export default function CarouselCard(props) {
  const { children, reference } = props;

  return (
    <BoxRelative style={{height: "100%"}}>
      <ReactCardCarousel {...props} ref={reference}>
        {children}
      </ReactCardCarousel>
    </BoxRelative>
  );
}
