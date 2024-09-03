"use client";
import type { todo, todoList } from "@/types/todo";
import { useState } from "react";

import { MdDelete } from "react-icons/md";

const Inputfield = () => {
  const [todo, setTodo] = useState<todo>({ text: "" });
  const [todoList, setTodoList] = useState<todoList[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ text: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.text.trim() !== "") {
      setTodoList([
        ...todoList,
        { id: todoList.length, text: todo.text, isDone: true },
      ]);
      setTodo({ text: "" });
    }
  };

  const handleDelete = (id: number) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const listofTodo = todoList.map((todo, index) => (
    <ul key={index} className="text-wrap flex gap-2">
      <input type="checkbox" onChange={() => ToggleTodo(index)} />
      <li
        className={`${
          todo.isDone ? "" : "line-through"
        } flex justify-between w-full`}
      >
        {todo.text}
        <div className="flex gap-3">
          {/* <button >
            <MdEdit></MdEdit>
          </button> */}
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

  const ToggleTodo = (id: number) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        console.log(todo.id, todo);
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });

    setTodoList(updatedTodoList);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center w-full">
        <form
          className="gap-2 flex w-full justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="text-black bg-white rounded-lg border-slate-950 px-2 py-1 w-6/12"
            placeholder="Enter your task"
            onChange={onChange}
            value={todo.text}
          />
          <button
            className="bg-green-400 p-1 rounded-md text-white"
            type="submit"
          >
            Add
          </button>
        </form>
        {todoList.length > 0 ? (
          <div className="text-black bg-white rounded-lg mt-4 px-2 py-4 w-[55%]">
            {listofTodo}
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    </main>
  );
};

export default Inputfield;
