import React, { useState } from "react";
import CarouselCard from "../../modules/CarouselCard";
import Card from "../../elements/Card";

export default function SelectBody({ getCurrentBody, bodys }) {
  const [CarouselRef, setCarouselRef] = useState(null);
  const [currentBody, setCurrentBody] = useState(bodys[0]);

  getCurrentBody = () => {
    return currentBody;
  };

  return (
    <>
      <CarouselCard
        reference={(Carousel) => setCarouselRef(Carousel)}
        afterChange={() => setCurrentBody(bodys[CarouselRef.getCurrentIndex()])}
        disable_box_shadow
        disable_keydown
        spread="wide"
      >
        {bodys.map((body, key) => (
          <Card key={key}>
            <img src={body} alt={key} />
          </Card>
        ))}
      </CarouselCard>
    </>
  );
}
