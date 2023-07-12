import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Workspace from "./components/Notes/components/Workspace";
import Style from "./App.style";
import {
  createEmptyNote,
  deleteNote,
  getNote,
  getNotes,
} from "services/indexeddb.service";
import { INote } from "interfaces/notes";
import { updateNote } from "services/indexeddb.service";
import { ContextApi, IContextValues } from "context";

function App() {
  const [notes, setNotes] = useState<INote[]>([]);
  const [selectedNote, setSelectedNote] = useState<number | null>(null);
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);

  const getNotesFromDb = () => {
    getNotes((res: INote[]) => {
      setNotes(res.reverse());
    });
  };

  const setEditingNode = () => {
    setEditingNoteId((prev) => (prev ? null : selectedNote));
  };
  const selectNoteHandler = (id: number) => {
    setSelectedNote(id);
    setEditingNoteId(null);
  };

  const createNoteHandler = () => {
    const emptyNote = {
      id: Date.now(),
      content: "",
      createdAt: new Date().toString(),
    };
    createEmptyNote(emptyNote, () => {
      getNotesFromDb();
      setSelectedNote(emptyNote.id);
      setEditingNoteId(null);
    });
  };

  const getSelectedNote = (setNote: (note: INote) => void) => {
    selectedNote && getNote(selectedNote, setNote);
  };

  const updateNoteHandler = (note: INote) => {
    updateNote(note, getNotesFromDb);
  };

  const deleteNodeHandler = () => {
    const cb = () => {
      setSelectedNote(null);
      setEditingNoteId(null);
      getNotesFromDb();
    };
    selectedNote && deleteNote(selectedNote, cb);
  };

  const searchNoteHandler = () => {};

  const contextValue: IContextValues = {
    notes,
    selectedNote,
    createNote: createNoteHandler,
    updateNote: updateNoteHandler,
    deleteNote: deleteNodeHandler,
    searchNote: searchNoteHandler,
    setSelectedNote: selectNoteHandler,
    setEditingNode,
    getSelectedNote,
    editingNoteId,
  };

  useEffect(() => {
    getNotesFromDb();
  }, []);

  return (
    <ContextApi.Provider value={contextValue}>
      <Style className="App">
        <Header />
        <div className="app__wapper">
          <Notes />
          <Workspace />
        </div>
      </Style>
    </ContextApi.Provider>
  );
}

export default App;
