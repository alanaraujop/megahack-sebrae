import React, { useRef } from 'react'
import { Container } from './Profile.styles'
import SelectBody from '../../components/features/SelectBody'
import bodys from "../../assets/images/bodys"

export default function Profile() {
  const selectorRef = useRef(null);

  const setBody = (body) => {
    console.log(selectorRef.current.getCurrentBody());
  } 

  return (
    <Container>
      <SelectBody ref={selectorRef} bodys={bodys} action={setBody}/>
    </Container>
  )
}
