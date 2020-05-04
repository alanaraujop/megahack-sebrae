import React from 'react'
import ColorSelect from '../../components/modules/ColorSelect/ColorSelect'

export default function Fitting() {
  return (
    <>
      <ColorSelect colors={["#CC9676", "#8A4A26", "#FFBB94"]} onClick={color => console.log(color)} />
    </>
  )
}
