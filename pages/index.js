import React from "react";
import { isAuth } from "../Actions/authAction";
export default function HomePage() {
  console.log(isAuth().name);
  return (
    <>
      <div>
        <p>Home page</p>
        {isAuth().name}
      </div>
    </>
  );
}
