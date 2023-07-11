import { pxToRem } from "helpers/style";
import styled from "styled-components";
import colors from "styles/colors";

export default styled.ul`
  max-width: ${pxToRem(250)};
  width: 100%;
  height: 90vh;
  overflow-y: auto;
  border-right: ${pxToRem(1)} solid ${colors.grey};
`;
