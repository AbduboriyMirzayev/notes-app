import { pxToRem } from "helpers/style";
import styled from "styled-components";
import colors from "styles/colors";

export default styled.li`
  border-bottom: ${pxToRem(1)} solid ${colors.darkGrey};

  .note__button {
    width: 100%;
    display: block;
    padding: 0;
    border: transparent;
    background-color: transparent;
    padding: ${pxToRem(16)} ${pxToRem(22)};
    cursor: pointer;

    &:hover {
      background-color: ${colors.grey}40;
    }
  }

  .note__button--active,
  .note__button--active:hover {
    background-color: ${colors.grey};
  }

  .note__title {
    width: 100%;
    font-size: ${pxToRem(16)};
    color: ${colors.black};
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .note__wrapper {
    display: flex;
    gap: ${pxToRem(5)};
    margin-top: ${pxToRem(5)};
  }

  .note__text {
    font-size: ${pxToRem(14)};
    white-space: nowrap;
    margin: 0;
  }

  .note__subtext {
    font-weight: 200;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 650px) {
    .note__button {
      padding: ${pxToRem(16)};
    }
  }

  @media (max-width: 400px) {
    .note__wrapper {
      flex-direction: column-reverse;
      text-align: left;
    }
  }
`;
