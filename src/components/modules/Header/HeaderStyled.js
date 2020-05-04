import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: sticky;
  height: 120px;
  top: 0;
  box-shadow: 4px 4px 20px 2px rgba(144, 137, 130, 0.3);
  @media (max-width: 768px) {
    box-sizing: none;
    height: 80px;
  }
`;

export const Logo = styled.img`
  height: 89px;
  @media (max-width: 768px) {
    height: 60px;
  }
`;
