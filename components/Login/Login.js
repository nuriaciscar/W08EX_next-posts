import { useEffect, useState } from "react";

const Form = () => {
  const initialData = {
    name: "",
    avatar: "",
  };

  const [data, setData] = useState(initialData);
  const [isDisabled, setIsDisabled] = useState(true);

  const changeData = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    if (data.name !== "" && data.imageURL !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [data]);

  const onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(data));
  };

  return (
    <Form autocomplete="off" noValidate>
      <input type="text" onChange={changeData} placeholder="Username"></input>
      <input type="text" onChange={changeData} placeholder="url"></input>
      <button type="submit" onSubmit={onSubmit} disabled={isDisabled}>
        Submit
      </button>
      {data.imageURL ? <img src={data.avatar} alt="Image" height="100" /> : ""}
    </Form>
  );
};

export default Form;
