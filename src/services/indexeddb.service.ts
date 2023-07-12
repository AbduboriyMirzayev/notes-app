import { INote, IUpdateNote } from "interfaces/notes";

let db: IDBDatabase;

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
        objectStore.createIndex("isSelected", "isSelected", { unique: false });
      }
    };
  });

export const createEmptyNote = (note: INote, cb: VoidFunction) => {
  const customerObjectStore = db
    .transaction("notes", "readwrite")
    .objectStore("notes");

  const addRequest = customerObjectStore.add(note);
  addRequest.onsuccess = () => {
    cb();
  };
};

export const updateNote = (note: IUpdateNote, cb: VoidFunction) => {
  const objectStore = db.transaction("notes", "readwrite").objectStore("notes");
  var request = objectStore.put(note);

  request.onsuccess = () => {
    cb();
  };
};

export const deleteNote = (noteId: number, cb: VoidFunction) => {
  const objectStore = db.transaction("notes", "readwrite").objectStore("notes");
  const deleteRequest = objectStore.delete(noteId);
  const index = objectStore.index("isSelected");
  const getedKey = index.getKey("true");
  deleteRequest.onsuccess = () => {
    cb();
  };
};

export const getNotes = async (
  callback: (notes: INote[]) => void,
  errorHandler?: VoidFunction
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
