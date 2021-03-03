import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./Todo.css";

const Todo = () => {
  // State and State handler of Todolist
  const [data, dataHandler] = useState([]);
  let InputTodo = useRef(null);

  // Add tasks in the Todo list
  const AddTask = () => {
    dataHandler([...data, InputTodo.current.value]);
    
  };

  //update a specific task in the Todo list
  const UpdateInputHandler = (e, index) => {
    let newArray = [...data];
    newArray[index] = e.target.value;
    dataHandler([...newArray]);
  };

  //Render a input element in the DOM for a task updation

  const UpdateHandler = (index) => {
    ReactDOM.render(
      <div>
        <input
          id={567 + index}
          placeholder={`update the task${index + 1} `}
          onChange={(e) => {
            UpdateInputHandler(e, index);
          }}
        />
        <button onClick={ComponentUnMount}>save</button>
      </div>,
      document.getElementById("Update__Container")
    );
  };

  // Unmount the input element from DOM  after a task updation
  const ComponentUnMount = () => {
    ReactDOM.unmountComponentAtNode(
      document.getElementById("Update__Container")
    );
  };

  // Reamove a Specific task from Todo list
  const RemoveTask = (index) => {
    dataHandler([...data.slice(0, index), ...data.slice(index + 1)]);
    
  };

  return (
    <div className="Container">
      <div className="Todo__Input__Container">
        <input ref={InputTodo} className="user__input" />

        <button
          onClick={() => {
            AddTask();
          }}
        >
          add item
        </button>
        <br />
      </div>

      <div>
        {data.map((item, index) => {
          return (
            <div key={item + index} className="List__Container" id={index + 123}>
                <div className='Task__Container'>
                   <p className="Task__header">{`Task ${index + 1}`}</p>
                    <p  className="Task__Content">{item}</p>

                </div>
              
              <div className="Btn__Container">
                <button
                  onClick={(e, item) => {
                    UpdateHandler(index);
                  }}
                >
                  Update task
                </button>
                <button
                  onClick={() => {
                    RemoveTask(index);
                  }}
                >
                  {" "}
                  removeitem
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div id="Update__Container"></div>
    </div>
  );
};
export default Todo;
