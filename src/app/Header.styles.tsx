import styled from "@emotion/styled/macro";
import { darkYellow, purple, white, yellow } from "../styles/colors";
import { ContainerPattern, HoverAnimation } from "../styles/patterns";

export const HeaderContainer = styled.header`
  ${ContainerPattern};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${yellow};
`;

export const Title = styled.h1`
  font-size: 20px;
  line-height: 22px;
  font-weight: 400;
  color: ${yellow};
  text-shadow: 0 1px 1px ${purple};
  margin: 0;
`;

export const Center = styled.div``;

export const MenuButton = styled.button`
  height: 19px;
  width: 22px;
  background: linear-gradient(
    180deg,
    ${darkYellow} 0,
    ${darkYellow} 3px,
    ${white} 3px,
    ${white} 8px,
    ${purple} 8px,
    ${purple} 11px,
    ${white} 11px,
    ${white} 16px,
    ${darkYellow} 16px,
    ${darkYellow} 19px
  );
  border: none;
  outline: none;
  margin: 0;

  :hover {
    margin: 2px 0 0 0;
  }

  ${HoverAnimation}
`;
