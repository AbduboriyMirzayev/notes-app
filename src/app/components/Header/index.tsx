import Button from "Ui/Button";
import Input from "Ui/Input";
import { CreateIcon, DeleteIcon, EditIcon } from "assets/icons";
import React, { useContext } from "react";
import Style from "./Header.style";
import { ContextApi } from "context";

function Header() {
  const { createNote } = useContext(ContextApi);
  return (
    <Style>
      <ul className="header__list">
        <li className="header__list-item">
          <Button onClick={createNote}>
            <CreateIcon />
          </Button>
        </li>
        <li className="header__list-item">
          <Button>
            <DeleteIcon />
          </Button>
        </li>
        <li className="header__list-item">
          <Button>
            <EditIcon />
          </Button>
        </li>
      </ul>
      <Input className="header__search" placeholder={"Поиск"} />
    </Style>
  );
}

export default Header;
