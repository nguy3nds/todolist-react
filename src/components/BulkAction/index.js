import React, { useContext } from "react";
import styled from "styled-components";
import ListContext from "../../Context/ListContext";
import { Button } from "../TodoList/components/TodoItem";

export default function BulkAction() {
  const { lists, setLists } = useContext(ListContext);

  const handleRemove = () => {
    const listsAfterRemove = [];
    [...lists].map((el) => {
      if (!el._checked) listsAfterRemove.push(el);
    });
    setLists(listsAfterRemove);
  };

  return (
    <Bottom>
      <span>Bulk action:</span>
      <Button className="remove" onClick={handleRemove}>
        Remove
      </Button>
      <Button className="done">Done</Button>
    </Bottom>
  );
}

const Bottom = styled.div`
  position: absolute;
  background-color: #e0e0e0;
  bottom: 0;
  padding: 15px 0;
  width: calc(100% - 30px);
  .remove {
    background-color: #d9534f;
    margin: 0 15px;
  }
  .done {
    background-color: #2196f3;
  }
  span {
    margin: 15px;
  }
`;
