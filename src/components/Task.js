import Button from "./Button";
import { useState } from "react";

const dangerBtn = {
  background: "rgba(255, 0, 0, 0.7)",
  color: "#fff",
};

const warnBtn = {
  background: "rgba(255, 255, 0, 0.7)",
  color: "#000",
};

const editText = "Сохранить";
const dangerText = "Удалить";
const warnText = "Редактировать";

function Task({ taskText, done, id, isEdit, edit, editTask, deleteTask }) {
  const [checked, setChecked] = useState(false);

  if (checked) {
    done = true;
  } else {
    done = false;
  }

  return (
    <div className="task-item">
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        {isEdit ? (
          <input
            className="input-task"
            value={taskText}
            onChange={(event) => editTask(id, "taskText", event)}
          />
        ) : (
          <p className={done ? "task-text done-text" : "task-text"}>
            {taskText}
          </p>
        )}
      </div>

      <div className="wrapper-btn">
        <Button
          btnClass={warnBtn}
          text={isEdit ? editText : warnText}
          action={edit}
          id={id}
        />
        <Button
          btnClass={dangerBtn}
          text={dangerText}
          action={deleteTask}
          id={id}
        />
      </div>
    </div>
  );
}

export default Task;
