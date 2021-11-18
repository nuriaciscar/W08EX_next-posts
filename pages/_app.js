import "../styles/global.css";
import { useEffect, useState } from "react";
import Login from "../components/Login/Login";

import Header from "../components/Header/Header";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [isThereUser, setIsThereUser] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsThereUser(true);
    } else {
      setIsThereUser(false);
    }
  }, []);

  return (
    <>
      <Header />
      {isThereUser ? <Component {...pageProps} /> : <Login />}
    </>
  );
}
