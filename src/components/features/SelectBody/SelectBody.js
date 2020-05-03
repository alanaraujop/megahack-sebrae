import React, { useState } from "react";
import CarouselCard from "../../modules/CarouselCard";
import Card from "../../elements/Card";
import Button from "../../elements/Button";

export default function SelectBody({ bodys, setBodySelected }) {
  const [CarouselRef, setCarouselRef] = useState(null);
  const [currentBody, setCurrentBody] = useState(bodys[0]);

  return (
    <>
      <CarouselCard
        reference={(Carousel) => setCarouselRef(Carousel)}
        afterChange={() => setCurrentBody(bodys[CarouselRef.getCurrentIndex()])}
        disable_box_shadow
        disable_keydown
        spread="wide"
        style={{ minHeight: "300px" }}
      >
        {bodys.map((body, key) => (
          <Card
            key={key}
            style={{ padding: "40px", margin: "0 30px", minHeight: "150px" }}
          >
            <img src={body} alt={key} />
          </Card>
        ))}
      </CarouselCard>
      <Button action={() => setBodySelected(currentBody)} width="140px">
        ESCOLHER
      </Button>
    </>
  );
}
