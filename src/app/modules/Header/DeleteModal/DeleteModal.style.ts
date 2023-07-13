import { pxToRem } from "styles/converter";
import { styled } from "styled-components";
import colors from "styles/colors";

export default styled.div`
  .delete-modal__text {
    font-size: ${pxToRem(22)};
    text-align: center;
    font-weight: 600;
    margin-bottom: ${pxToRem(35)};
  }

  .delete-modal__wrapper {
    display: flex;
    gap: ${pxToRem(15)};
  }

  .delete-modal__button {
    width: 100%;
    font-size: 16px;
    padding: ${pxToRem(14)} ${pxToRem(16)};
  }

  .delete-modal__button--delete {
    color: ${colors.red};
    border-color: ${colors.red};
  }
`;
