import { withFormik } from "formik";
import React, { useContext } from "react";
import { Form } from "../TodoList/components/FormUpdate";
import * as Yup from "yup";
import ListContext from "../../Context/ListContext";

function FormAddTask(props) {
  const { setLists } = useContext(ListContext);
  const { setFieldValue } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      ...props.values,
      _id: Math.floor(Math.random() * 10) + new Date().getTime(),
      _checked: false,
    };
    setLists((previousLists) => [...previousLists, newTask]);

    setFieldValue("title", "");
    setFieldValue("desc", "");
    setFieldValue("date", "");
    setFieldValue("pio", "normal");
  };

  return (
    <Form onSubmit={handleSubmit} style={{ borderTop: "1px solid black" }}>
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
          <label htmlFor="">Date</label>
          <input
            type="date"
            name="date"
            value={props.values.date}
            onChange={props.handleChange}
          />
          <p className="errors">{props.errors.date}</p>
        </div>
        <div className="col">
          <label htmlFor="">Piority</label>
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
        </div>
      </div>

      <button
        type="submit"
        disabled={!props.values.date || !props.values.title}
      >
        Add
      </button>
    </Form>
  );
}

const FormikFormAddTask = withFormik({
  mapPropsToValues() {
    // Init form field
    return {
      title: "",
      desc: "",
      date: "",
      pio: "normal",
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
})(FormAddTask);

export default FormikFormAddTask;
