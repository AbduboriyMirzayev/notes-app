export interface INote {
  id: number;
  content: string;
  createdAt: string;
}

export interface IUpdateNote {
  id: number;
  content?: string;
}
