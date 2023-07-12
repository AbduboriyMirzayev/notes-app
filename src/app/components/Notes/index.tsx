import React, { useContext } from "react";
import Note from "./components/Note";
import Style from "./Notes.style";
import { ContextApi } from "context";

function Notes() {
  const { notes, setSelectedNote, selectedNote } = useContext(ContextApi);
  return (
    <Style>
      {notes.map((note) => (
        <Note
          title={note.content}
          key={note.id}
          subtext="Lorem ipsum dolor, sit amet consectetur"
          createdAt={note.createdAt}
          isActive={selectedNote == note.id}
          selectHandler={() => setSelectedNote(note.id)}
        />
      ))}
    </Style>
  );
}

export default Notes;
