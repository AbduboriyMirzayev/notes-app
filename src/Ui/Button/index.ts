import { styled } from "styled-components";
import { pxToRem } from "helpers/style";
import { BORDER_RADIUS } from "styles/constants";
import colors from "styles/colors";

export default styled.button`
  padding: ${pxToRem(5)} ${pxToRem(10)};
  border-radius: ${pxToRem(BORDER_RADIUS)};
  background-color: white;
  color: ${colors.black};
  border: ${pxToRem(1)} solid ${colors.grey};
  cursor: pointer;

  :disabled {
    cursor: auto;
    background-color: ${colors.grey};
  }
`;
