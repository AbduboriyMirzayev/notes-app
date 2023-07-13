import { INote } from "./notes";

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
