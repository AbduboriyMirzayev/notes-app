import { INote } from "interfaces/notes";
import { createContext } from "react";

export interface IContextValues {
  notes: INote[];
  selectedNote: null | number;
  editingNoteId: null | number;
  setSelectedNote: (id: number) => void;
  updateNote: (note: INote) => void;
  searchNote: (searchText: string) => void;
  getSelectedNote: (cb: (node: INote) => void) => void;
  createNote: VoidFunction;
  deleteNote: VoidFunction;
  setEditingNode: VoidFunction;
}

const initialValues: IContextValues = {
  notes: [],
  selectedNote: null,
  editingNoteId: null,
  createNote: () => {},
  setSelectedNote: () => {},
  updateNote: () => {},
  deleteNote: () => {},
  searchNote: () => {},
  getSelectedNote: () => {},
  setEditingNode: () => {},
};

export const ContextApi = createContext(initialValues);
