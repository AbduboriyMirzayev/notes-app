import { styled } from "styled-components";
import { pxToRem } from "styles/converter";
import { BORDER_RADIUS } from "styles/constants";
import colors from "styles/colors";

export default styled.button`
  padding: ${pxToRem(5)} ${pxToRem(10)};
  border-radius: ${pxToRem(BORDER_RADIUS)};
  background-color: white;
  color: ${colors.black};
  border: ${pxToRem(1)} solid ${colors.grey};
  cursor: pointer;

  &:disabled {
    cursor: auto;
    opacity: 0.6;
  }
`;
