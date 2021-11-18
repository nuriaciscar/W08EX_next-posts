import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [data, setData] = useState();

  const changeData = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios.get("https://isdi-blog-posts-api.herokuapp.com/posts", data);
  };
  return (
    <Form autocomplete="off" noValidate>
      <input type="text" onChange={changeData} placeholder="title"></input>
      <input type="text-area" onChange={changeData} placeholder="Body"></input>
      <button type="submit" onSubmit={onSubmit}>
        Create
      </button>
    </Form>
  );
};

export default Form;
