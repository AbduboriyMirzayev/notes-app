import { styled } from "styled-components";
import { pxToRem } from "styles/converter";

export default styled.div`
  .container {
    max-width: ${pxToRem(1440)};
    width: 100%;
    margin: 0 auto;
  }

  .app__wapper {
    display: flex;
  }
`;
