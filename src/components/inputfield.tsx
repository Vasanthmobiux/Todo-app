"use client";

type InputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  todo: {
    text: string;
  };
};

const Inputfield = ({ onChange, handleSubmit, todo }: InputProps) => {
  return (
    <main className="flex  flex-col items-center justify-between p-15">
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
      </div>
    </main>
  );
};

export default Inputfield;
