import { pxToRem } from "styles/converter";
import styled from "styled-components";
import colors from "styles/colors";
import { BORDER_RADIUS, TEXT_SIZE } from "styles/constants";

export default styled.input`
  color: ${colors.black};
  font-size: ${pxToRem(TEXT_SIZE)};
  border: ${pxToRem(1)} solid ${colors.grey};
  border-radius: ${pxToRem(BORDER_RADIUS)};
  padding: ${pxToRem(5)};

  ::placeholder {
    color: ${colors.grey};
  }
`;
