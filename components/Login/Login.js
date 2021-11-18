import { useState } from "react";
import axios from "axios";

const Form = () => {
  const initialData = {
    name: "",
    image: "",
  };

  const [data, setData] = useState(initialData);

  const changeData = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(data));
  };

  return (
    <Form autocomplete="off" noValidate>
      <input type="text" onChange={changeData} placeholder="Username"></input>
      <input type="text" onChange={changeData} placeholder="url"></input>
      <button type="submit" onSubmit={onSubmit}>
        Submit
      </button>
    </Form>
  );
};

export default Form;
