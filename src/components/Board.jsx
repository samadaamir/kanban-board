import React, { useState } from "react";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { initialData } from "../data/initialData";
import Column from "./Column";

const Board = () => {
  const [boardData, setBoardData] = useState(initialData);

  const sensors = useSensors(
    useSensor(PointerSensor)
  );

  // ---------------- ADD CARD ----------------
  const addCard = (columnId, title) => {
    setBoardData((prev) => ({
      ...prev,
      columns: prev.columns.map((column) =>
        column.id === columnId
          ? {
            ...column,
            cards: [
              ...column.cards,
              {
                id: Date.now().toString(),
                title,
              },
            ],
          }
          : column
      ),
    }));
  };

  // ---------------- DELETE CARD ----------------
  const deleteCard = (columnId, cardId) => {
    setBoardData((prev) => ({
      ...prev,
      columns: prev.columns.map((column) =>
        column.id === columnId
          ? {
            ...column,
            cards: column.cards.filter((card) => card.id !== cardId),
          }
          : column
      ),
    }));
  };

  // ---------------- FIND COLUMN ----------------
  const findColumnByCardId = (cardId, columns) => {
    return columns.find((column) =>
      column.cards.some((card) => card.id === cardId)
    );
  };

  // ---------------- DRAG END ----------------
  const handleDragEnd = ({ active, over }) => {
    if (!over) return;

    if (active.id === over.id) return;

    setBoardData((prev) => {
      const columns = [...prev.columns];

      const sourceColumn = findColumnByCardId(active.id, columns);

      let destinationColumn =
        columns.find((column) => column.id === over.id) ||
        findColumnByCardId(over.id, columns);

      if (!sourceColumn || !destinationColumn) return prev;

      const sourceIndex = columns.findIndex(
        (col) => col.id === sourceColumn.id
      );

      const destinationIndex = columns.findIndex(
        (col) => col.id === destinationColumn.id
      );

      const draggedCard = sourceColumn.cards.find(
        (card) => card.id === active.id
      );

      if (!draggedCard) return prev;

      // ---------------- SAME COLUMN ----------------
      if (sourceColumn.id === destinationColumn.id) {
        const oldIndex = sourceColumn.cards.findIndex(
          (card) => card.id === active.id
        );

        const newIndex = sourceColumn.cards.findIndex(
          (card) => card.id === over.id
        );

        columns[sourceIndex] = {
          ...sourceColumn,
          cards: arrayMove(sourceColumn.cards, oldIndex, newIndex),
        };

        return {
          ...prev,
          columns,
        };
      }

      // ---------------- DIFFERENT COLUMN ----------------

      const newSourceCards = sourceColumn.cards.filter(
        (card) => card.id !== active.id
      );

      let newDestinationCards = [...destinationColumn.cards];

      const overIndex = destinationColumn.cards.findIndex(
        (card) => card.id === over.id
      );

      if (overIndex === -1) {
        // Empty column
        newDestinationCards.push(draggedCard);
      } else {
        newDestinationCards.splice(overIndex, 0, draggedCard);
      }

      columns[sourceIndex] = {
        ...sourceColumn,
        cards: newSourceCards,
      };

      columns[destinationIndex] = {
        ...destinationColumn,
        cards: newDestinationCards,
      };

      return {
        ...prev,
        columns,
      };
    });
  };
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <div className="flex gap-6 p-6">
        {boardData.columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            onAddCard={addCard}
            onDeleteCard={deleteCard}
          />
        ))}
      </div>
    </DndContext>
  );
};

export default Board;