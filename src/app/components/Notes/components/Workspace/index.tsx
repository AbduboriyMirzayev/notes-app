import React from "react";
import { formatDDMMYYYY, formatHours } from "../../helpers";
import Style from "./Workspace.style";

type Props = {};

function Workspace({}: Props) {
  return (
    <Style>
      <p className="workspace__title">
        {formatDDMMYYYY(new Date())} at {formatHours(new Date())}
      </p>
      <pre className="workspace__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse at
        impedit ab labore commodi repudiandae neque? Magnam possimus tempora
        dicta delectus eaque corporis commodi praesentium libero, blanditiis,
        nobis veritatis illo?
      </pre>

      <textarea
        className="workspace__textarea"
        onChange={(e) => console.log(e.target.value)}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse at
        impedit ab labore commodi repudiandae neque? Magnam possimus tempora
        dicta delectus eaque corporis commodi praesentium libero, blanditiis,
        nobis veritatis illo?
      </textarea>
    </Style>
  );
}

export default Workspace;
