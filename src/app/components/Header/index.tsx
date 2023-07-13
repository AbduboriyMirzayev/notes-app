import React, { ChangeEvent, useContext, useState } from "react";
import Button from "Ui/Button";
import Input from "Ui/Input";
import { CreateIcon, DeleteIcon, EditIcon } from "assets/icons";
import Style from "./Header.style";
import { ContextApi } from "context";
import DeleteModal from "./DeleteModal";

function Header() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const { createNote, setEditingNode, selectedNote, deleteNote, searchNote } =
    useContext(ContextApi);

  const deleteModalVisibleHandler = () =>
    setIsDeleteModalVisible((prev) => !prev);

  const deleteHandler = () => {
    deleteNote();
    deleteModalVisibleHandler();
  };

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    searchNote(e.target.value);
  };

  return (
    <Style>
      <ul className="header__list">
        <li className="header__list-item">
          <Button onClick={createNote}>
            <CreateIcon />
          </Button>
        </li>
        <li className="header__list-item">
          <Button disabled={!selectedNote} onClick={deleteModalVisibleHandler}>
            <DeleteIcon />
          </Button>
        </li>
        <li className="header__list-item">
          <Button onClick={setEditingNode} disabled={!selectedNote}>
            <EditIcon />
          </Button>
        </li>
      </ul>
      <Input
        className="header__search"
        onChange={searchHandler}
        placeholder={"Поиск"}
      />
      {isDeleteModalVisible && (
        <DeleteModal
          onDelete={deleteHandler}
          closeHandler={deleteModalVisibleHandler}
        />
      )}
    </Style>
  );
}

export default Header;
