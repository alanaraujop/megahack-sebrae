import React from 'react';
import * as S from './ImageStyled';

const Image = ({ src, width=40, height, alt }) => (
  <S.Image
    src={src}
    width={width}
    height={height}
    alt={alt}
  />
)
export default Image
