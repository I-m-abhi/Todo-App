import { useGlobalContext } from "../todoContext";

const ListHeader = () => {
  const {todoList, selectAllCheckBox, handleMultipleDlt} = useGlobalContext();

  return (
    <>
      {
        todoList.length >= 2 &&
        <div className="list-header">
          <input
            onClick={selectAllCheckBox}
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