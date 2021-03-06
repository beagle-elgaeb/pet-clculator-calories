import styled from "@emotion/styled/macro";
import cross from "../../icons/cross.svg";
import {
  lightPurple,
  mediumPurple,
  purple,
  purpleTransparent,
} from "../../styles/colors";
import { HoverAnimation } from "../../styles/patterns";

export const MenuPopupOverlay = styled.div<{ opened: boolean }>`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: end;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  background: ${purpleTransparent};
  transition: all 0.3s ease-in;
  z-index: ${({ opened }) => (opened ? "11" : "-1")};
`;

export const MenuPopupContainer = styled.div<{ opened: boolean }>`
  height: 100vh;
  width: 95%;
  max-width: 350px;
  position: absolute;
  top: 0;
  right: ${({ opened }) => (opened ? "0" : "-500px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${lightPurple};
  transition: all 0.3s ease-in;
  z-index: 12;
`;

export const Buttons = styled.div`
  width: calc(100% - 60px);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 30px 30px 50px 30px;
`;

export const Close = styled.button`
  height: 20px;
  width: 20px;
  background: url(${cross});
  background-size: contain;
  border: none;
  border-radius: 2px;
  outline: none;

  :hover {
    transform: rotate(10deg);
  }

  ${HoverAnimation}
`;

export const Logout = styled.button`
  height: 36px;
  width: 220px;
  box-sizing: border-box;
  background: ${lightPurple};
  border: 1px solid ${mediumPurple};
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  color: ${purple};
  margin: 0 0 60px 0;

  :hover {
    box-shadow: 0 0 5px 1px ${mediumPurple};
  }

  ${HoverAnimation}
`;
