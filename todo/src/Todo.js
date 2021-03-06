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
          className='Update__Input'
          placeholder={`update the task${index + 1} `}
          onChange={(e) => {
            UpdateInputHandler(e, index);
          }}
        />
        <button className='Save__Btn' onClick={ComponentUnMount}>save</button>
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

  // Remove a Specific task from Todo list
  const RemoveTask = (index) => {
    dataHandler([...data.slice(0, index), ...data.slice(index + 1)]);
    if(data.length-1===0){
       return ComponentUnMount();

    }
    
  };
// It returns view of Todo list to the DOM 
  return (
    <div className="Container todo__wrapper)">
      <div className="Todo__Input__Container">
        <input required ref={InputTodo} className="user__input" />

        <button
        className='User__input__btn'
        
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
                    <div   className="Task__Content">{item}</div>

                </div>
              
              <div className="Btn__Container">
                <button
                  className='Update__btn'
                  onClick={(e, item) => {
                    UpdateHandler(index);
                  }}
                >
                  Update task
                </button>
                <button
                className='Remove__Btn'
                  onClick={() => {
                    RemoveTask(index);
                  }}
                >
                  remove item
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
