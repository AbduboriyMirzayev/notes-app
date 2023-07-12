import React, { createContext, useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Workspace from "./components/Notes/components/Workspace";
import Style from "./App.style";
import { createEmptyNote, getNotes } from "services/indexeddb.service";
import { INote } from "interfaces/notes";
import { updateNote } from "services/indexeddb.service";
import { ContextApi, IContextValues } from "context";

function App() {
  const [notes, setNotes] = useState<INote[]>([]);
  const [selectedNote, setSelectedNote] = useState<number | null>(null);

  const getNotesFromDb = () => {
    getNotes((res: INote[]) => {
      setNotes(res);
    });
  };

  const createNoteHandler = () => {
    const emptyNote = {
      id: Date.now(),
      content: "",
      createdAt: new Date().toString(),
    };
    createEmptyNote(emptyNote, getNotesFromDb);
  };

  const updateNoteHandler = () => {
    // updateNote({ id }, getNotesFromDb);
  };

  const deleteNodeHandler = () => {
    // deleteNote();
  };

  const searchNoteHandler = () => {};

  const contextValue: IContextValues = useMemo(
    () => ({
      notes,
      selectedNote,
      createNote: createNoteHandler,
      updateNote: updateNoteHandler,
      deleteNote: deleteNodeHandler,
      searchNote: searchNoteHandler,
      setSelectedNote,
    }),
    [notes, selectedNote]
  );

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
