const TodoList = ({ todoList, setTodoList }) => {

  const handleDltTodo = (noteNo) => {
    const updateTodoList = todoList.filter((item) => item.noteNo !== noteNo);
    setTodoList(updateTodoList);
  }

  return (
    <div className="todo-list container">
      {todoList.map((listItem) => {
        return (
          <div className='grid' key={listItem.noteNo}>
            <p>{listItem.userNote}</p>
            <p>{listItem.noteDate}</p>
            <button
              onClick={() => handleDltTodo(listItem.noteNo)}
              className='btn del-btn'>
              Delete 🗑️
            </button>
          </div>
        )
      })}
    </div>
  )
};

export default TodoList;