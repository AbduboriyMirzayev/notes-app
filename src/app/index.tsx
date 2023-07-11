import React from "react";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Workspace from "./components/Notes/components/Workspace";
import Style from "./App.style";

function App() {
  return (
    <Style className="App">
      <Header />
      <div className="app__wapper">
        <Notes />
        <Workspace />
      </div>
    </Style>
  );
}

export default App;
