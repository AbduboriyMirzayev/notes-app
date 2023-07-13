import { pxToRem } from "styles/converter";
import styled from "styled-components";
import colors from "styles/colors";

export default styled.ul`
  max-width: ${pxToRem(250)};
  width: 100%;
  height: calc(100vh - 64px);
  overflow-y: auto;
  border-right: ${pxToRem(1)} solid ${colors.grey};
`;
