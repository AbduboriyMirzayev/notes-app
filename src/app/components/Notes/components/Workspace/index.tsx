import React, { useContext, useEffect, useState } from "react";
import { formatDDMMYYYY, formatHours } from "../../helpers";
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

  const changeHandler = (content: string) => {
    note && updateNote({ ...note, content });
  };

  return (
    <Style>
      {note && (
        <>
          <p className="workspace__title">
            {formatDDMMYYYY(new Date(note.createdAt))} at{" "}
            {formatHours(new Date(note.createdAt))}
          </p>
          {!editingNoteId ? (
            <pre className="workspace__text">{note.content}</pre>
          ) : (
            <textarea
              className="workspace__textarea"
              onChange={(e) => changeHandler(e.target.value)}
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
