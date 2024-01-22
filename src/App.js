import "./App.css";
import "./style.css";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import Header from "./components/Header";
import Task from "./components/Task";
import Footer from "./components/Footer";

function id() {
  return uuid();
}

const toDoList = [
  {
    id: id(),
    taskText: "first task of the day",
    isEdit: false,
    done: false,
  },
  {
    id: id(),
    taskText: "Two task of the day",
    isEdit: false,
    done: false,
  },
  {
    id: id(),
    taskText: "Three task of the day",
    isEdit: false,
    done: false,
  },
];

const newObj = {
  id: "",
  taskText: "",
  isEdit: "",
  done: "",
};

let listLength = toDoList.length;

function App() {
  useEffect(() => {
    document.title = "To-Do-List";
  });

  const [tasks, setTask] = useState(toDoList);
  const [isAdd, setAdd] = useState(false);
  const [newTask, setNewTask] = useState(newObj);

  function edit(id) {
    let copy = Object.assign([], tasks);
    setTask(
      copy.map((task) => {
        if (task.id === id) {
          task.isEdit = !task.isEdit;
        }
        return task;
      })
    );
  }

  function editTask(id, prop, event) {
    let copy = Object.assign([], tasks);
    setTask(
      copy.map((task) => {
        if (task.id === id) {
          task[prop] = event.target.value;
        }
        return task;
      })
    );
  }

  function deleteTask(id) {
    let copy = Object.assign([], tasks);
    setTask(
      copy.filter((task) => {
        if (task.id !== id) {
          return task;
        }
      })
    );
    listLength = copy.length - 1;
  }

  function add() {
    setAdd(true);
  }

  function handleChange(prop, event) {
    const copy = Object.assign({}, newTask);
    copy.id = id();
    copy[prop] = event.target.value;
    copy.isEdit = false;
    copy.done = false;
    setNewTask(copy);
  }

  function addTask() {
    const copy = Object.assign([], tasks);
    copy.push(newTask);
    setAdd(false);
    setTask(copy);
    listLength = copy.length;
  }

  const tasksList = tasks.map((task) => {
    return (
      <Task
        taskText={task.taskText}
        done={task.done}
        isEdit={task.isEdit}
        id={task.id}
        key={task.id}
        edit={edit}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    );
  });

  return (
    <div className="container">
      <Header listLength={listLength} />
      <div className="divider"></div>
      <div className="task-wrapper">{tasksList}</div>
      <div className="divider"></div>
      <Footer
        isAdd={isAdd}
        add={add}
        handleChange={handleChange}
        newText={newTask.taskText}
        addTask={addTask}
      />
    </div>
  );
}

export default App;
