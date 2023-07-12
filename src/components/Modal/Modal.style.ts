import { pxToRem } from "helpers/style";
import { styled } from "styled-components";

export default styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal__under-context {
    background: #29292991;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .modal__content {
    width: ${pxToRem(350)};
    height: auto;
    background: #fff;
    z-index: 9;
    border-radius: ${pxToRem(10)};
    padding: ${pxToRem(15)} ${pxToRem(20)};
  }
`;
