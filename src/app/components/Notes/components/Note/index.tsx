import React from "react";
import Style from "./Note.style";
import { formatDate } from "../../helpers";

type Props = { title: string; subtext: string };

function Note({ title, subtext }: Props) {
  return (
    <Style>
      <button className="note__button">
        <h5 className="note__title">{title}</h5>
        <div className="note__wrapper">
          <p className="note__text">{formatDate(new Date().toString())}</p>
          <p className="note__text note__subtext">{subtext}</p>
        </div>
      </button>
    </Style>
  );
}

export default Note;
