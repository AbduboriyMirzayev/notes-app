import { INote } from "interfaces/notes";
import { toast } from "react-toastify";

let db: IDBDatabase;

const notifyAboutError = () =>
  toast.error("Упс... Чтото пошло не так. Попробуйте ещё раз.");

const getObjectStore = () =>
  db.transaction("notes", "readwrite").objectStore("notes");

const checkDBInitialization = () =>
  new Promise((res, rej) => {
    if (db) {
      res(db);
    }

    const DBOpenRequest = window.indexedDB.open("notes", 1);

    DBOpenRequest.onsuccess = () => {
      db = DBOpenRequest.result;
      res(db);
    };

    DBOpenRequest.onerror = (e) => {
      notifyAboutError();
      rej(e);
    };

    DBOpenRequest.onupgradeneeded = () => {
      const db = DBOpenRequest.result;
      if (!db.objectStoreNames.contains("notes")) {
        const objectStore = db.createObjectStore("notes", {
          keyPath: "id",
        });
        objectStore.createIndex("id", "id", { unique: true });
      }
    };
  });

export const createEmptyNote = async (note: INote, cb: VoidFunction) => {
  await checkDBInitialization();

  const objectStore = getObjectStore();

  const addRequest = objectStore.add(note);
  addRequest.onsuccess = () => {
    cb();
  };

  addRequest.onerror = notifyAboutError;
};

export const updateNote = (note: INote, cb: VoidFunction) => {
  const objectStore = getObjectStore();
  var putRequest = objectStore.put(note);

  putRequest.onsuccess = () => {
    cb();
  };
  putRequest.onerror = notifyAboutError;
};

export const deleteNote = (noteId: number, cb: VoidFunction) => {
  const objectStore = getObjectStore();
  const deleteRequest = objectStore.delete(noteId);
  deleteRequest.onsuccess = () => {
    cb();
  };

  deleteRequest.onerror = notifyAboutError;
};

export const getNotes = async (callback: (notes: INote[]) => void) => {
  await checkDBInitialization();

  const notes = getObjectStore().getAll();

  notes.onsuccess = () => {
    callback(notes.result.reverse());
  };

  notes.onerror = notifyAboutError;
};

export const getNote = async (id: number, cb: (note: INote) => void) => {
  await checkDBInitialization();
  const note = getObjectStore().get(id);

  note.onsuccess = () => {
    cb(note.result);
  };

  note.onerror = notifyAboutError;
};

export const searchNotes = async (
  searchValue: string,
  cb: (notes: INote[]) => void
) => {
  const notes = getObjectStore();
  const cursorRequest = notes.openCursor();
  const foundedNotes: INote[] = [];
  const regexp = new RegExp(searchValue, "ig");

  cursorRequest.onsuccess = () => {
    const cursor = cursorRequest.result;
    if (cursor) {
      if (cursor.value.content.search(regexp) !== -1) {
        foundedNotes.push(cursor.value);
      }
      cursor.continue();
    } else {
      cb(foundedNotes.reverse());
    }
  };

  cursorRequest.onerror = notifyAboutError;
};
