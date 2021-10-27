import React, { useContext } from "react";
import styled from "styled-components";
import ListContext from "../../Context/ListContext";

export default function SearchInput({ setListsAfterSearch }) {
  const { lists } = useContext(ListContext);

  const handleSearch = (e) => {
    const searchUsers = lists.filter((el) =>
      el.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setListsAfterSearch(searchUsers);
  };

  return <Input placeholder="Search..." onChange={handleSearch} />;
}

const Input = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;

  &:focus {
    border-bottom: 1px solid #757575;
    border: 1px solid black;
  }
`;
