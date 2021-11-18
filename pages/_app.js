import "../styles/global.css";
import { useEffect, useState } from "react";
import Login from "@/components/Login/Login";

import Header from "@/components/Header/Header";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
  const [isThereUser, setIsThereUser] = useState(null);

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsThereUser(true);
      setUser(getUser);
    } else {
      setIsThereUser(false);
    }
  }, [user]);

  return (
    <>
      <Header />
      {isThereUser}? (
      <Component {...pageProps} />
      ) : (
      <Login />)
    </>
  );
}
