import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Form = () => {
  const router = useRouter();
  const initialData = {
    title: "",
    body: "",
  };

  const [data, setData] = useState(initialData);

  const changeData = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post("https://isdi-blog-posts-api.herokuapp.com/posts", data);
    router.push("/");
  };

  return (
    <Form autocomplete="off" noValidate onSubmit={onSubmit}>
      <input
        type="text"
        onChange={changeData}
        placeholder="title"
        value={data.title}
      ></input>
      <input
        type="text-area"
        onChange={changeData}
        placeholder="Body"
        value={data.body}
      ></input>
      <button type="submit">Create</button>
    </Form>
  );
};

export default Form;
