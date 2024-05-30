import ListHeader from "./ListHeader";

const TodoList = ({ todoList, setTodoList }) => {
console.log('rendered')
  const handleDltTodo = (noteNo) => {
    const updateTodoList = todoList.filter((item) => item.noteNo !== noteNo);
    setTodoList(updateTodoList);
  }
  const handleCheckBox = (listItem) => {
    listItem.checkStatus = !listItem.checkStatus;
  }

  return (
    <div className="todo-list container">
      <ListHeader todoList={todoList} setTodoList={setTodoList}/>
      {todoList.map((listItem) => {
        return (
          <div className='grid grid-four-col' key={listItem.noteNo}>
            <input
              defaultChecked={listItem.checkStatus}
              onClick={() => handleCheckBox(listItem)}
              className="checkbox"
              type="checkbox"
            />
            <p className="list-items">{listItem.userNote}</p>
            <p className="list-items">{listItem.noteDate}</p>
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