import { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import "./App.css";
import BulkAction from "./components/BulkAction";
import FormAddTask from "./components/FormAddTask";
import SearchInput from "./components/SearchInput";
import TodoList from "./components/TodoList";
import ListContext from "./Context/ListContext";

function App() {
  const { lists } = useContext(ListContext);

  const isShowBulkAction = useMemo(() => {
    let boolean = false;
    for (let el of lists) {
      if (el._checked) boolean = true;
    }
    return boolean;
  }, [lists]);

  const [listsAfterSearch, setListsAfterSearch] = useState(lists);

  useEffect(() => {
    setListsAfterSearch(lists);
  }, [lists]);

  return (
    <Container>
      <LeftSide>
        <H2>New task</H2>
        <FormAddTask />
      </LeftSide>
      <RightSide>
        <H2>To Do List</H2>
        <SearchInput setListsAfterSearch={setListsAfterSearch} />
        <TodoList listsAfterSearch={listsAfterSearch} />
        {isShowBulkAction && <BulkAction />}
      </RightSide>
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  min-height: calc(90vh);
  border: 1px solid black;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

const H2 = styled.h2`
  text-align: center;
`;

const LeftSide = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  border-right: none;
  @media (min-width: 992px) {
    width: 40%;
    border-right: 1px solid black;
  }
`;

const RightSide = styled.div`
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  @media (min-width: 992px) {
    width: 60%;
  }
`;
