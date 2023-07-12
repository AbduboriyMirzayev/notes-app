import React from "react";
import Style from "./Note.style";
import { formatDate } from "../../helpers";

type Props = {
  title: string;
  subtext: string;
  selectHandler: VoidFunction;
  createdAt: string;
  isActive: boolean;
};

function Note({ title, subtext, selectHandler, isActive, createdAt }: Props) {
  return (
    <Style>
      <button
        className={`note__button ${isActive && "note__button--active"}`}
        onClick={selectHandler}
      >
        <h5 className="note__title">{title}</h5>
        <div className="note__wrapper">
          <p className="note__text">{formatDate(createdAt)}</p>
          <p className="note__text note__subtext">{subtext}</p>
        </div>
      </button>
    </Style>
  );
}

export default Note;
