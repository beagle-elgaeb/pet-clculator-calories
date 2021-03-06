import styled from "@emotion/styled/macro";
import arrowDown from "../../icons/arrow-down.svg";
import arrowRight from "../../icons/arrow-right.svg";
import { brightPurple, darkYellow, mediumPurple } from "../../styles/colors";
import { TablePattern } from "../../styles/patterns";

export const MealsContainer = styled.div`
  margin: 15px 0 0;
`;

export const OpenDataButton = styled.button`
  width: 100%;
  display: flex;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 18px;
  font-weight: 300;
  color: ${brightPurple};
  text-align: start;
  text-transform: uppercase;
  margin: 0;
`;

export const OpenDataButtonIcon = styled.div<{ openData: boolean }>`
  height: 18px;
  width: 18px;
  background: url(${({ openData }) => (openData ? arrowRight : arrowDown)});
  background-size: contain;
  margin: 0 5px 0 0;
`;

export const TotalsSubtitle = styled.div`
  ${TablePattern}
  justify-items: center;
  padding: 15px 0 0;
`;

export const Subtitle = styled.div`
  width: 100%;
  border-right: 1px solid ${mediumPurple};
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
  margin: 0;

  :last-child {
    border-right: none;
  }
`;

export const Totals = styled.div`
  ${TablePattern}
  justify-items: center;
  padding: 5px 0 0;
`;

export const Total = styled.div`
  width: 100%;
  border-right: 1px solid ${mediumPurple};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: ${brightPurple};
  margin: 0;

  :last-child {
    border-right: none;
  }
`;

export const TotalCalories = styled(Total)`
  color: ${darkYellow};
`;
