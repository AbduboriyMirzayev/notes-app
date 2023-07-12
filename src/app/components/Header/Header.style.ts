import { pxToRem } from "helpers/style";
import styled from "styled-components";
import colors from "styles/colors";

export default styled.header`
  display: flex;
  justify-content: space-between;
  gap: ${pxToRem(10)};
  background-color: ${colors.grey};
  border-bottom: ${pxToRem(1)} solid ${colors.darkGrey};
  padding: ${pxToRem(10)};

  .header__list {
    display: flex;
    gap: ${pxToRem(10)};
    margin: 0;
  }

  .header__search {
    padding: ${pxToRem(12)};
    max-width: ${pxToRem(160)};
  }

  @media (max-width: 450px) {
    .header__search {
      width: ${pxToRem(120)};
    }
  }
`;
