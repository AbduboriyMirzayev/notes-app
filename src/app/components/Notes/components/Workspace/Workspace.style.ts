import { pxToRem } from "helpers/style";
import { styled } from "styled-components";
import colors from "styles/colors";

export default styled.div`
  width: 100%;
  padding: ${pxToRem(20)} ${pxToRem(35)};

  .workspace__title {
    text-align: center;
    color: ${colors.darkGrey};
    margin-top: 0;
    margin-bottom: ${pxToRem(15)};
  }

  .workspace__text {
    white-space: break-spaces;
    word-break: break-word;
    font-size: ${pxToRem(16)};
    margin: 0;
  }

  .workspace__textarea {
    width: 100%;
    height: 70vh;
    font-size: ${pxToRem(16)};
    border: none;
    outline: none;
    resize: none;
  }

  @media (max-width: 650px) {
    & {
      padding: ${pxToRem(20)};
    }
  }

  @media (max-width: 400px) {
    & {
      padding: ${pxToRem(20)} ${pxToRem(14)};
    }
  }
`;
