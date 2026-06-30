import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Card = ({ card, onDelete }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: card.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center justify-between rounded-lg bg-white p-3 shadow cursor-grab active:cursor-grabbing"
    >
      <h2 className="font-medium">{card.title}</h2>

      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent drag when clicking delete
          onDelete();
        }}
        className="rounded border border-red-400 px-2 py-1 text-red-500 hover:bg-red-500 hover:text-white"
      >
        ✕
      </button>
    </div>
  );
};

export default Card;