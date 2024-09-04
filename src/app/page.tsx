"use client";
import Inputfield from "@/components/inputfield";
import Header from "@/components/header";
import { ReactEventHandler, useState } from "react";
import type { todo, todoList } from "@/types/todo";

import { Todolist } from "@/components/todolist";

export default function Home() {
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
        {
          id: todoList.length,
          text: todo.text,
          isDone: true,
          isChecked: false,
        },
      ]);
      setTodo({ text: "" });
    }
  };

  const handleDelete = (id: number) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const ToggleTodo = (id: number) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isChecked: !todo.isChecked };
      }
      return todo;
    });

    setTodoList(updatedTodoList);

    let t;
  };
  return (
    <>
      <Header />
      <Inputfield onChange={onChange} todo={todo} handleSubmit={handleSubmit} />
      <Todolist
        todoList={todoList}
        ToggleTodo={ToggleTodo}
        handleDelete={handleDelete}
      />
    </>
  );
}
