import React from "react";
import TodoItem from "./components/TodoItem";

export default function TodoList({ listsAfterSearch }) {
  return (
    <div style={{ marginBottom: "100px" }}>
      {listsAfterSearch.length > 0 ? (
        listsAfterSearch.map((list, index) => (
          <TodoItem key={index} {...list} />
        ))
      ) : (
        <p>No result for searching ...</p>
      )}
    </div>
  );
}
