import React, { useState } from "react";

const AddCardForm = ({ onAdd, onCancel }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAdd(title.trim());
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <input
        type="text"
        placeholder="Enter a title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex items-center gap-2">
        <button
          type="submit"
          className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Add
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="text-xl text-gray-500 hover:text-black"
        >
          ✕
        </button>
      </div>
    </form>
  );
};

export default AddCardForm;