import { createContext, useContext, useRef, useState } from "react";


const TodoContext = createContext();

const TodoProvider = ({ children }) => {

  const [todoList, setTodoList] = useState(() => {
    const isTodoList = localStorage.getItem('todoList');
    if (isTodoList) {
      return JSON.parse(isTodoList);
    } else {
      return [];
    }
  });
  const [isChecked, setIsChecked] = useState(false);
  
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
    if (currentTodo.userNote !== '' && currentTodo.noteDate !== '') {
      setTodoList([currentTodo, ...todoList]);
      userNoteElem.current.value = '';
      noteDateElem.current.value = '';
    }
  }

  const handleDltTodo = (noteNo) => {
    const updateTodoList = todoList.filter((item) => item.noteNo !== noteNo);
    setTodoList(updateTodoList);
  }

  const handleCheckBox = (listItem) => {
    listItem.checkStatus = !listItem.checkStatus;
  }

  const selectAllCheckBox = () => {
    setIsChecked(!isChecked);
    const a = todoList.map((listItem) => {
      listItem.checkStatus = !isChecked;
      return listItem;
    })
    setTodoList(a);
  }

  const handleMultipleDlt = () => {
    const newTodoList = todoList.filter((todo) => todo.checkStatus === false);
    setTodoList(newTodoList)
  }

  return (
    <TodoContext.Provider
      value={{
        todoList: todoList,
        handleAddTodo: handleAddTodo,
        userNoteElem: userNoteElem,
        noteDateElem: noteDateElem,
        handleDltTodo: handleDltTodo,
        handleCheckBox: handleCheckBox,
        isChecked: isChecked,
        setIsChecked: setIsChecked,
        selectAllCheckBox: selectAllCheckBox,
        handleMultipleDlt: handleMultipleDlt,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(TodoContext);
};

export { TodoContext, TodoProvider };