import React from 'react'
import { Container } from './Profile.styles'
import SelectBody from '../../components/features/SelectBody'
import bodys from "../../assets/imgs/bodys"

export default function Profile() {
  return (
    <Container>
      <SelectBody bodys={bodys} />
    </Container>
  )
}
