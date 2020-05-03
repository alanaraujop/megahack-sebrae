import React from "react";

import { useDispatch } from "react-redux";
import { ActionsProfile } from "../../store/actions";
import { Container } from "./Profile.styles";
import SelectBody from "../../components/features/SelectBody";
import bodys from "../../assets/images/bodys";
import Typography from "../../components/elements/Typography/Typography";

export default function Profile() {
  const dispatch = useDispatch();

  const setBodyProfile = (body) => {
    dispatch(ActionsProfile.setBodyProfile(body));
  };

  return (
    <Container>
      <Typography
        type="title"
        color="#BFBFBF"
        style={{ fontSize: "18px", maxWidth: "300px", textAlign: "center" }}
      >
        ESCOLHA O FORMATO DE CORPO QUE SE ASSEMELHA AO SEU !
      </Typography>
      <SelectBody bodys={bodys} setBodySelected={(body) => setBodyProfile(body)} />
    </Container>
  );
}
