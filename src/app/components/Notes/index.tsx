import React, { useContext } from "react";
import Note from "./components/Note";
import Style from "./Notes.style";
import { ContextApi } from "context";

function Notes() {
  const { notes, setSelectedNote, selectedNote } = useContext(ContextApi);
  return (
    <Style>
      {notes.map((note) => {
        const splitedContent = note.content.split(" ");
        const title = splitedContent.slice(0, 6).join(" ");
        const subtext = splitedContent.slice(6, 12).join(" ");
        return (
          <Note
            title={title}
            key={note.id}
            subtext={subtext}
            createdAt={note.createdAt}
            isActive={selectedNote == note.id}
            selectHandler={() => setSelectedNote(note.id)}
          />
        );
      })}
    </Style>
  );
}

export default Notes;
