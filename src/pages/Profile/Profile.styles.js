import styled from 'styled-components';
import bgDefault from "../../assets/images/fundo.png"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${bgDefault});
  background-position: top center;
  background-size: cover;
  background-color: #fafafa;
`;
