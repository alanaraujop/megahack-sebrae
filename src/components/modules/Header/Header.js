import React from 'react';
import * as S from './HeaderStyled';
import VivaLogo from '../../../assets/images/VivaVitrine.png'
import { Image } from '../../elements';

const Header = () => (
  <S.Header>
    <Image src={VivaLogo} width={208} height={89} alt="BrandLogo"/>
  </S.Header>
);

export default Header
