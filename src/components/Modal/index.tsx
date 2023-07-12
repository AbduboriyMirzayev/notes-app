import React, { ReactNode } from "react";
import Style from "./Modal.style";

type Props = { onClose: VoidFunction; children?: ReactNode };

function Modal({ onClose, children }: Props) {
  return (
    <Style>
      <div className="modal__under-context" onClick={onClose} />
      <div className="modal__content">{children}</div>
    </Style>
  );
}

export default Modal;
