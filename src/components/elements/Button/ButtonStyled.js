import styled, { css } from "styled-components";
import { shade, tint, transparentize, darken } from "polished";

const themeButton = css`
  color: ${(props) =>
    !props.outlined ? "white" : props.theme.colors[props.color]};
  background-color: ${(props) =>
    !props.outlined ? props.theme.colors[props.color] : "transparent"};
  border: 1px solid
    ${(props) => (!props.outlined ? "none" : props.theme.colors[props.color])};
  &:hover {
    background-color: ${(props) =>
      !props.outlined
        ? shade(0.09, props.theme.colors[props.color])
        : transparentize(1, props.theme.colors[props.color])};
    border: 1px solid
      ${(props) =>
        !props.outlined ? "none" : tint(0.15, props.theme.colors[props.color])};
    color: ${(props) =>
      props.outlined && tint(0.15, props.theme.colors[props.color])};
  }
  &:active {
    background-color: ${(props) =>
      !props.outlined
        ? props.theme.colors[props.color]
        : transparentize(0.9, props.theme.colors[props.color])};
  }
`;

const Disabled = css`
  background-color: ${darken(0.05, "#e0e0e0")};
  color: ${shade(0.35, "#e0e0e0")};
  &:hover {
    background-color: ${darken(0.05, "#e0e0e0")};
  }

  cursor: not-allowed;
`;

export const Button = styled.button`
  cursor: pointer;
  font: Light 25px Poppins;
  letter-spacing: 3px;
  border: none;
  border-radius: 20px;
  height: 35px;
  transition: all 0.08s ease-in-out;
  width: ${(props) => props.width || "180px"};
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  ${themeButton}
  ${(props) => props.disabled && Disabled};
  ${(props) => props.style}
`;
