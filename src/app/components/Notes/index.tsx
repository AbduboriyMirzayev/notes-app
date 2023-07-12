import React from "react";
import Note from "./components/Note";
import Style from "./Notes.style";
import { INote } from "interfaces/notes";

type Props = { notes: INote[] };

function Notes({ notes }: Props) {
  return (
    <Style>
      {notes.map((note) => (
        <Note
          title={note.content}
          key={note.id}
          subtext="Lorem ipsum dolor, sit amet consectetur"
        />
      ))}
    </Style>
  );
}

export default Notes;
