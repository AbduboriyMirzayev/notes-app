import React from "react";
import Note from "./components/Note";
import Style from "./Notes.style";
type Props = {};

const notes = [
  {
    content: "Внешний вид программы состоит из:",
    createdAt: new Date(),
    id: Date.now(),
  },
  {
    content: "Внешний вид программы состоит из:",
    createdAt: new Date(),
    id: Date.now(),
  },
  {
    content: "Внешний вид программы состоит из:",
    createdAt: new Date(),
    id: Date.now(),
  },
  {
    content: "Внешний вид программы состоит из:",
    createdAt: new Date(),
    id: Date.now(),
  },
  {
    content: "Внешний вид программы состоит из:",
    createdAt: new Date(),
    id: Date.now(),
  },
  {
    content: "Внешний вид программы состоит из:",
    createdAt: new Date(),
    id: Date.now(),
  },
  {
    content: "Внешний вид программы состоит из:",
    createdAt: new Date(),
    id: Date.now(),
  },
  {
    content: "Внешний вид программы состоит из:",
    createdAt: new Date(),
    id: Date.now(),
  },
  {
    content: "Внешний вид программы состоит из:",
    createdAt: new Date(),
    id: Date.now(),
  },
  {
    content: "Внешний вид программы состоит из:",
    createdAt: new Date(),
    id: Date.now(),
  },
  {
    content: "Внешний вид программы состоит из:",
    createdAt: new Date(),
    id: Date.now(),
  },
];

function Notes({}: Props) {
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
