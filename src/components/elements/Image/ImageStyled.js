import styled from 'styled-components';

export const Image = styled.img`
  width: ${props=> props.width}px;
  height: ${props=> props.height ? props.height : props.width}px;
`;
