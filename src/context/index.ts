import { IContextValues } from "interfaces/contextapi";
import { createContext } from "react";

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
