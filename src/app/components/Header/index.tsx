import Button from "Ui/Button";
import Input from "Ui/Input";
import { CreateIcon, DeleteIcon, EditIcon, SearchIcon } from "assets/icons";
import React from "react";
import Style from "./Header.style";

type Props = {};

function Header({}: Props) {
  return (
    <Style>
      <ul className="header__list">
        <li className="header__list-item">
          <Button>
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
