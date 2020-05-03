import styled from "styled-components";
import assets from "./assets";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  position: fixed;
  transition: all 0.3s ease;
  top: 0px;
  left: ${(props) => (props.show ? "0px" : "100vw")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: rgb(255, 255, 255);
  min-height: 30vh;
  max-height: ${(props) => (props.full ? "auto" : props.maxHeight)};
  max-width: ${(props) => (props.full ? "auto" : "85vw")};
  width: ${(props) => (props.full ? "100%" : "auto")};
  height: ${(props) => (props.full ? "100%" : "auto")};
  border-radius: 4px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Body = styled.div`
  flex: 1;
  overflow: scroll;
  height: auto;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 60px;
  justify-content: center;
  background-color: ${(props) => props.bgHeader || "#3f51b5"};
`;

export const Title = styled.h2`
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  margin: 8px 16px;
  color: #fff;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: ${(props) => props.height || "70px"};
  box-shadow: 0px -1px 10px 0px #bebebe4a;
  margin-top: auto;
`;

const Close = styled.span`
  position: absolute;
  top: 22px;
  right: 13px;
  background-image: url(${assets.close});
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  background-position: center;
`;

export { Container, Close, Content, Header, Footer, Body };
