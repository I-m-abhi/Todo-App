import { useRef, useState } from "react";
import TodoList from "./TodoList";

const InputForm = () => {
  const [todoList, setTodoList] = useState([]);
  const userNoteElem = useRef();
  const noteDateElem = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();
    let currentTodo = {
      noteNo: new Date(),
      userNote: userNoteElem.current.value,
      noteDate: noteDateElem.current.value,
      checkStatus: false,
    }
    if(currentTodo.userNote !== '' && currentTodo.noteDate !== ''){
      setTodoList([currentTodo, ...todoList]);
      userNoteElem.current.value = '';
      noteDateElem.current.value = '';
    }
  }

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
          <TodoList todoList={todoList} setTodoList={setTodoList} />
      }
    </>
  );
};

export default InputForm;