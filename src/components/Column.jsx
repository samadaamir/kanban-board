import React, { useState } from "react";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import Card from "./Card";
import AddCardForm from "./AddCardForm";

const Column = ({ column, onAddCard, onDeleteCard }) => {
  const [isAdding, setIsAdding] = useState(false);

  // Makes the whole column a valid drop target
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div
      ref={setNodeRef}
      className="w-80 rounded-xl bg-gray-100 p-4 shadow"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">{column.title}</h2>

        <span className="rounded-full bg-white px-3 py-1 text-sm font-medium shadow">
          {column.cards.length}
        </span>
      </div>

      {/* Cards */}
      <SortableContext
        items={column.cards.map((card) => card.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="min-h-30 space-y-3">
          {column.cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onDelete={() => onDeleteCard(column.id, card.id)}
            />
          ))}
        </div>
      </SortableContext>

      {/* Add Card */}
      {isAdding ? (
        <AddCardForm
          onAdd={(title) => {
            onAddCard(column.id, title);
            setIsAdding(false);
          }}
          onCancel={() => setIsAdding(false)}
        />
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="mt-4 w-full rounded-lg border border-dashed border-gray-400 py-2 text-sm font-medium transition hover:bg-white"
        >
          + Add Card
        </button>
      )}
    </div>
  );
};

export default Column;