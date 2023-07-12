import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Workspace from "./components/Notes/components/Workspace";
import Style from "./App.style";
import { createEmptyNote, getNotes } from "services/indexeddb.service";
import { INote } from "interfaces/notes";

function App() {
  const [notes, setNotes] = useState<INote[]>([]);

  const getNotesFromDb = () => {
    getNotes((res) => {
      setNotes(res);
    });
  };

  const createNote = () => {
    const emptyNote = {
      id: Date.now(),
      content: "",
      createdAt: new Date().toString(),
    };
    createEmptyNote(emptyNote, getNotesFromDb);
  };

  useEffect(() => {
    getNotesFromDb();
  }, []);

  return (
    <Style className="App">
      <Header createHandler={createNote} />
      <div className="app__wapper">
        <Notes notes={notes} />
        <Workspace />
      </div>
    </Style>
  );
}

export default App;
