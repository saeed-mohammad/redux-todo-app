import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, clearTodo } from "../Redux/todo/Action";
import "./Todo.css";
const Todo = () => {
  const handlekey = (e) => {
    console.log("check");
    if (e.key === "Enter") {
      dispatch(addTodo(inputData), setInputData(""));
    } else {
      console.log("test");
    }

    // e.key.target.value === "Enter" && console.log(e);
  };

  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();
  return (
    <div className="todo">
      <div className="child">
        <h2>TODO LIST</h2>
        <div className="add">
          <input
            type="text"
            placeholder="ADD Item"
            autoFocus
            value={inputData}
            onChange={(e) => {
              setInputData(e.target.value);
            }}
          />
          <IoMdAdd
            className="icon"
            onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            onKeyPress={(e) => handlekey(e)}
          />
        </div>
        <div className="showitem">
          {list.map((item) => {
            return (
              <div className="single" key={item.id}>
                <h4>{item.data}</h4>
                <FiDelete
                  className="icon"
                  onClick={() => dispatch(deleteTodo(item.id))}
                />
              </div>
            );
          })}
        </div>
        <button className="btn" onClick={() => dispatch(clearTodo())}>
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Todo;
