import Button from "Ui/Button";
import Modal from "components/Modal";
import React from "react";
import Style from "./DeleteModal.style";

type Props = {
  closeHandler: VoidFunction;
  onDelete: VoidFunction;
};

function DeleteModal({ closeHandler, onDelete }: Props) {
  return (
    <Modal onClose={closeHandler}>
      <Style>
        <p className="delete-modal__text">Вы действительно хотите удалить?</p>
        <div className="delete-modal__wrapper">
          <Button className="delete-modal__button" onClick={closeHandler}>
            Отменить
          </Button>
          <Button
            className="delete-modal__button delete-modal__button--delete"
            onClick={onDelete}
          >
            Удалать
          </Button>
        </div>
      </Style>
    </Modal>
  );
}

export default DeleteModal;
