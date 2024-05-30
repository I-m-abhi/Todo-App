import { useState } from "react";

const ListHeader = ({ todoList, setTodoList }) => {
  const [selectAll, setSelectAll] = useState(false);

  const selectAllCheckBox = ()=> {
    setSelectAll(!selectAll);
    todoList.forEach((currTodo, index, todoArr)=>{
      currTodo.checkStatus = !selectAll;
      setTodoList(todoArr);
    })
  }
  const handleMultipleDlt = ()=> {
    const newTodoList = todoList.filter((todo)=>todo.checkStatus === false);
    setTodoList(newTodoList)
  }

  return (
    <>
    {
      todoList.length >= 2 &&
        <div className="list-header">
          <input
            onClick={selectAllCheckBox}
            defaultChecked={selectAll}
            type="checkbox"
            className="checkbox" />
          <div>Select all</div>
          <button
            onClick={handleMultipleDlt}
            className='btn del-btn'>
            Delete Multiple 🗑️
          </button>
        </div>
    }
    </>
  )
};

export default ListHeader;