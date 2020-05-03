import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  ${(props) => props.style}
  font-size: 24px;
`;

const SubTitle = styled.h2`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  ${(props) => props.style}
  font-size: 20px;
`;

const Text = styled.p`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  ${(props) => props.style}
`;

export default {
  title: Title,
  subtitle: SubTitle,
  text: Text,
};
