import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./modules/Header";
import Notes from "./modules/Notes";
import Workspace from "./modules/Notes/components/Workspace";
import Style from "./App.style";
import {
  createEmptyNote,
  deleteNote,
  getNote,
  getNotes,
  searchNotes,
} from "services/indexeddb.service";
import { INote } from "interfaces/notes";
import { updateNote } from "services/indexeddb.service";
import { ContextApi } from "context";
import { IContextValues } from "interfaces/contextapi";

function App() {
  const [notes, setNotes] = useState<INote[]>([]);
  const [selectedNote, setSelectedNote] = useState<number | null>(null);
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);

  const getNotesFromDb = () => getNotes(setNotes);

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

    const cb = () => {
      getNotesFromDb();
      setSelectedNote(emptyNote.id);
      setEditingNoteId(null);
    };

    createEmptyNote(emptyNote, cb);
  };

  const getSelectedNote = (setNote: (note: INote) => void) => {
    selectedNote && getNote(selectedNote, setNote);
  };
  const updateNoteHandler = (note: INote) => updateNote(note, getNotesFromDb);

  const deleteNodeHandler = () => {
    const cb = () => {
      setSelectedNote(null);
      setEditingNoteId(null);
      getNotesFromDb();
    };
    selectedNote && deleteNote(selectedNote, cb);
  };

  const searchNoteHandler = (searchText: string) => {
    searchNotes(searchText, setNotes);
  };

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
    <>
      <ToastContainer />
      <ContextApi.Provider value={contextValue}>
        <Style className="App">
          <div className="wrapper">
            <Header />
            <div className="app__wapper">
              <Notes />
              <Workspace />
            </div>
          </div>
        </Style>
      </ContextApi.Provider>
    </>
  );
}

export default App;
