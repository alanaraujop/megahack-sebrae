import React from 'react';
import * as S from './ButtonStyled';

const Button = ({ action, children, color='primary', outlined, disabled, width, style })=> (
  <S.Button
    onClick={action}
    color={color}
    disabled={disabled}
    outlined={outlined}
    width={width}
    style={style}
  >
    {children}
  </S.Button>
)

export default Button;
