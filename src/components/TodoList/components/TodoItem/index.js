import React, { useContext, useState } from "react";
import styled from "styled-components";
import ListContext from "../../../../Context/ListContext";
import FormUpdate from "../FormUpdate";

export default function TodoItem(props) {
  const { title, _id, _checked } = props;
  const [isShowDetails, setIsShowDetails] = useState(false);
  const { lists, setLists } = useContext(ListContext);

  const handleDetails = () => {
    setIsShowDetails((pre) => !pre);
  };

  const handleChecked = () => {
    let listsAfterChecked = [...lists].map((el) =>
      el._id === _id ? { ...el, _checked: !_checked } : el
    );
    setLists(listsAfterChecked);
  };

  const handleRemove = () => {
    let listsAfterRemove = [...lists].filter((el) => el._id !== _id);
    setLists(listsAfterRemove);
  };

  return (
    <div>
      <Item>
        <input
          type="checkbox"
          name=""
          id=""
          checked={_checked}
          onChange={handleChecked}
        />
        <span>{title}</span>
        <Button className="remove" onClick={handleRemove}>
          Remove
        </Button>
        <Button className="details" onClick={handleDetails}>
          Details
        </Button>
      </Item>
      {isShowDetails && (
        <FormUpdate {...props} setIsShowDetails={setIsShowDetails} />
      )}
    </div>
  );
}

const Item = styled.div`
  margin: 15px 0px 0px 0px;
  padding: 15px;
  border: 1px solid black;

  span {
    margin-left: 10px;
  }

  .details {
    margin-right: 15px;
    background-color: #00bcd4;
  }

  .remove {
    background-color: #d9534f;
  }
`;

export const Button = styled.div`
  float: right;
  border-radius: 8px;
  color: #fff;
  border: 0;
  cursor: pointer;
  text-align: center;
  width: 60px;
  font-size: 0.9em;
  @media (min-width: 992px) {
    width: 120px;
    font-size: 1.1em;
  }
`;
