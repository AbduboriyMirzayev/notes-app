import Button from "Ui/Button";
import Input from "Ui/Input";
import { CreateIcon, DeleteIcon, EditIcon, SearchIcon } from "assets/icons";
import React from "react";
import Style from "./Header.style";
import { VoidFnWithoutArgs } from "interfaces/notes";

type Props = { createHandler: VoidFnWithoutArgs };

function Header({ createHandler }: Props) {
  return (
    <Style>
      <ul className="header__list">
        <li className="header__list-item">
          <Button onClick={createHandler}>
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
