import { INote, VoidFnWithoutArgs } from "interfaces/notes";

let db: IDBDatabase;

const notesList = [
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

const checkDBInitialization = () =>
  new Promise((res, rej) => {
    if (db) {
      res(db);
    }

    const DBOpenRequest = window.indexedDB.open("notes", 1);

    DBOpenRequest.onsuccess = (e) => {
      db = DBOpenRequest.result;
      res(db);
    };

    DBOpenRequest.onerror = (e) => {
      rej(e);
    };

    DBOpenRequest.onupgradeneeded = (e) => {
      const db = DBOpenRequest.result;
      if (!db.objectStoreNames.contains("notes")) {
        const objectStore = db.createObjectStore("notes", {
          keyPath: "id",
        });
        objectStore.createIndex("id", "id", { unique: true });
        objectStore.createIndex("content", "content", { unique: false });
        objectStore.createIndex("createdAt", "createdAt", { unique: false });
      }
    };
  });

export const createEmptyNote = (note: INote, cb: VoidFnWithoutArgs) => {
  const customerObjectStore = db
    .transaction("notes", "readwrite")
    .objectStore("notes");

  const addRequest = customerObjectStore.add(note);
  addRequest.onsuccess = () => {
    cb();
  };
};

export const deleteNote = (noteId: number, cb: VoidFnWithoutArgs) => {
  const objectStore = db.transaction("notes", "readwrite").objectStore("notes");
  const deleteRequest = objectStore.delete(noteId);

  deleteRequest.onsuccess = () => {
    cb();
  };
};

export const getNotes = async (
  callback: (notes: INote[]) => void,
  errorHandler?: VoidFnWithoutArgs
) => {
  await checkDBInitialization();

  const notes = db
    .transaction("notes", "readwrite")
    .objectStore("notes")
    .getAll();

  notes.onsuccess = () => {
    callback(notes.result);
  };

  notes.onerror = (error) => {
    if (errorHandler) {
      errorHandler();
    }
  };
};
