import { useEffect } from "react";
import TodoList from "./TodoList";
import { useGlobalContext } from "../todoContext";

const InputForm = () => {
  const {todoList, handleAddTodo, userNoteElem, noteDateElem } = useGlobalContext();
  
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <form className='input-form container' >
        <div className='grid'>
          <input
            ref={userNoteElem}
            className='input'
            name="userNote"
            type="text" />
          <input
            ref={noteDateElem}
            className='input'
            name="noteDate"
            type="date" />
          <button
            onClick={handleAddTodo}
            className='btn'>
            Add ➕
          </button>
        </div>
      </form>
      {
        (todoList.length === 0) ?
          <p className="main-heading">List down your first note</p>
          :
          <TodoList />
      }
    </>
  );
};

export default InputForm;