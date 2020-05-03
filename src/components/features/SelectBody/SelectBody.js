import React, { useState } from "react";
import CarouselCard from "../../modules/CarouselCard";
import Card from "../../elements/Card";
import Button from "../../elements/Button";

export default function SelectBody({ getCurrentBody, bodys, setBody}) {
  const [CarouselRef, setCarouselRef] = useState(null);
  const [currentBody, setCurrentBody] = useState(bodys[0]);

  getCurrentBody = () => {
    console.log(currentBody)
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
          <Card key={key} style={{padding: "40px", margin: "0 30px"}}>
            <img src={body} alt={key} />
          </Card>
        ))}
      </CarouselCard>
      <Button action={setBody} >Escolher</Button>
    </>
  );
}
