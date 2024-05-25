import { useRef, useState } from "react";
import TodoList from "./TodoList";

const InputForm = () => {
  const [todoList, setTodoList] = useState([]);
  const userNote = useRef();
  const noteDate = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();
    let currentTodo = {
      noteNo: new Date(),
      userNote: userNote.current.value,
      noteDate: noteDate.current.value,
    }
    if(currentTodo.userNote !== '' && currentTodo.noteDate !== ''){
      setTodoList([currentTodo, ...todoList]);
    }
    userNote.current.value = '';
    noteDate.current.value = '';
  }

  return (
    <>
      <form className='input-form container' >
        <div className='grid'>
          <input
            ref={userNote}
            className='input'
            name="userNote"
            type="text" />
          <input
            ref={noteDate}
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