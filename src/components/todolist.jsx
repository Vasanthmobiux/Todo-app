const todolist = () => {
  const listofTodo = todoList.map((todo, index) => (
    <div key={index} className="text-wrap flex gap-2">
      <input type="checkbox" />
      {todo.text}
    </div>
  ));
  return (
    <div>
      {todoList.length > 0 ? (
        <div className="text-black bg-white rounded-lg mt-4 px-2 py-4 w-[55%]">
          {listofTodo}
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
};

export default todolist;
