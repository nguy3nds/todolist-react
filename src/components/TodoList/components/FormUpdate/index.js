import { withFormik } from "formik";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import ListContext from "../../../../Context/ListContext";

function FormUpdate(props) {
  const { title, desc, date, pio, setFieldValue, setIsShowDetails, _id } =
    props;
  const { lists, setLists } = useContext(ListContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    let listsAfterUpdate = [...lists].map((el) =>
      el._id === _id ? { ...el, ...props.values } : el
    );
    setLists(listsAfterUpdate);
    setIsShowDetails(false);
  };

  useEffect(() => {
    setFieldValue("title", title);
    setFieldValue("desc", desc);
    setFieldValue("date", date);
    setFieldValue("pio", pio);
  }, [title, desc, date, pio, setFieldValue]);

  return (
    <Form onSubmit={handleSubmit}>
      <p className="errors">{props.errors.title}</p>
      <input
        type="text"
        name="title"
        value={props.values.title}
        onChange={props.handleChange}
      />
      <br />

      <label htmlFor="">Description</label>
      <br />
      <textarea
        rows="10"
        name="desc"
        value={props.values.desc}
        onChange={props.handleChange}
      ></textarea>
      <br />

      <div className="row">
        <div className="col">
          <p className="errors">{props.errors.date}</p>
          <label htmlFor="">Date</label>
          <br />
          <input
            type="date"
            name="date"
            value={props.values.date}
            onChange={props.handleChange}
          />
          <br />
        </div>
        <div className="col">
          <p></p>
          <label htmlFor="">Piority</label>
          <br />
          <select
            name="pio"
            value={props.values.pio}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
          >
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
          <br />
        </div>
      </div>

      <button type="submit">Update</button>
    </Form>
  );
}

const FormikFormUpdate = withFormik({
  mapPropsToValues() {
    // Init form field
    return {
      title: " ",
      desc: "",
      date: "",
      pio: "",
    };
  },
  validationSchema: Yup.object().shape({
    // Validate form field
    title: Yup.string().required("Title is required"),
    date: Yup.date().min(
      new Date(Date.now() - 86400000),
      "Date cannot be in the past"
    ),
  }),
})(FormUpdate);

export const Form = styled.form`
  padding: 15px;
  margin: 0px 0px 15px 0px;
  border: 1px solid black;
  border-top: none;

  input {
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;

    &:focus {
      border-bottom: 1px solid #757575;
      outline: none;
    }
  }

  label {
    font-weight: bold;
  }

  textarea {
    width: 100%;
  }

  button {
    width: 100%;
    background-color: #4caf50;
    color: #fff;
    padding: 10px;
    border-radius: 8px;
    font-size: 1.1em;
    border: 0;
    cursor: pointer;
  }

  button:disabled,
  button[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }

  select {
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 90%;
  }

  .row {
    margin-top: 20px;
    display: flex;
  }
  .col {
    width: 50%;
    input {
      width: 90%;
    }
  }

  .errors {
    color: red;
  }
`;

export default FormikFormUpdate;
