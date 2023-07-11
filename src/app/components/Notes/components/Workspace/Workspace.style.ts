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
    border: none;
    outline: none;
  }
`;
