import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { formatDate, formatHours } from "../../helpers";
import Style from "./Workspace.style";
import { ContextApi } from "context";
import { INote } from "interfaces/notes";

function Workspace() {
  const [note, setNote] = useState<INote | null>(null);
  const { getSelectedNote, selectedNote, editingNoteId, updateNote } =
    useContext(ContextApi);

  useEffect(() => {
    if (!selectedNote) {
      setNote(null);
    } else if (selectedNote || editingNoteId) {
      getSelectedNote(setNote);
    }
  }, [selectedNote, editingNoteId]);

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    note && updateNote({ ...note, content: e.target.value });
  };

  return (
    <Style>
      {note && (
        <>
          <p className="workspace__title">
            {formatDate(new Date(note.createdAt))} at{" "}
            {formatHours(new Date(note.createdAt))}
          </p>
          {!editingNoteId ? (
            <pre className="workspace__text">{note.content}</pre>
          ) : (
            <textarea
              className="workspace__textarea"
              onChange={changeHandler}
              autoFocus
              defaultValue={note.content}
            />
          )}
        </>
      )}
    </Style>
  );
}

export default Workspace;
