import { todoList } from "@/types/todo";

import { MdDelete } from "react-icons/md";

type todolistprops = {
  todoList: todoList[];
  ToggleTodo: (id: number) => void;
  handleDelete: (id: number) => void;
};

export const Todolist = ({
  todoList,
  ToggleTodo,
  handleDelete,
}: todolistprops) => {
  const listofTodo = todoList.map((todo, index) => (
    <ul className="text-wrap flex gap-2" key={index}>
      <li
        className={`${
          todo.isChecked ? "line-through" : ""
        } flex justify-between w-full`}
      >
        <div className="flex gap-2">
          <input
            type="checkbox"
            checked={todo.isChecked}
            onChange={() => {
              ToggleTodo(todo.id);
            }}
            className="cursor-pointer"
          />
          <div
            onClick={() => {
              ToggleTodo(todo.id);
            }}
            className="cursor-pointer"
          >
            {todo.text}
          </div>
        </div>
        <div className="flex ">
          <button
            onClick={() => {
              handleDelete(todo.id);
            }}
          >
            <MdDelete></MdDelete>
          </button>
        </div>
      </li>
    </ul>
  ));

  return (
    <div className="flex justify-center">
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
