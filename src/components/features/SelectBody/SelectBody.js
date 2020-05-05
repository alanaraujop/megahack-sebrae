import React, { useState } from "react";
import CarouselCard from "../../modules/CarouselCard";
import Card from "../../elements/Card";
import Button from "../../elements/Button";
import { useMedia } from "../../../hooks/useMedia";
import { Link } from "react-router-dom";

export default function SelectBody({ bodys, setBodySelected }) {
  const [CarouselRef, setCarouselRef] = useState(null);
  const [currentBody, setCurrentBody] = useState(bodys[0]);
  const { isSmall } = useMedia();

  return (
    <>
      <CarouselCard
        reference={(Carousel) => setCarouselRef(Carousel)}
        afterChange={() => setCurrentBody(bodys[CarouselRef.getCurrentIndex()])}
        prev={() => CarouselRef.prev()}
        next={() => CarouselRef.next()}
        disable_box_shadow
        disable_keydown
        spread="wide"
        style={{ minHeight: isSmall ? "240px" : "480px" }}
      >
        {bodys.map((body, key) => (
          <Card
            key={key}
            style={{
              padding: isSmall ? "20px" : "40px",
              margin: isSmall ? "0 10px" : "0 30px",
              minHeight: "150px",
              cursor: "default",
            }}
          >
            <img
              src={body}
              alt={key}
              width={isSmall ? "70px" : "140px"}
              height="auto"
            />
          </Card>
        ))}
      </CarouselCard>
      <Link to="/produtos">
        <Button
          action={() => setBodySelected(currentBody)}
          width="140px"
          style={{ boxShadow: "1px 1px 4px #00000075" }}
        >
          ESCOLHER
        </Button>
      </Link>
    </>
  );
}
