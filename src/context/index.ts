import { INote } from "interfaces/notes";
import { createContext } from "react";
import { IUpdateNote } from "interfaces/notes";

export interface IContextValues {
  notes: INote[];
  selectedNote: null | number;
  setSelectedNote: (id: number) => void;
  createNote: VoidFunction;
  updateNote: (note: IUpdateNote) => void;
  deleteNote: (id: number) => void;
  searchNote: (searchText: string) => void;
}

const initialValues: IContextValues = {
  notes: [],
  selectedNote: null,
  createNote: () => {},
  setSelectedNote: () => {},
  updateNote: () => {},
  deleteNote: () => {},
  searchNote: () => {},
};

export const ContextApi = createContext(initialValues);
