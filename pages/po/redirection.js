import React, { useState, useEffect } from "react";
import Router from "next/router";

const redirection = () => {
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      Router.replace("/");
      //   Router.push("/");
    }
  }, [counter]);

  return (
    <div>
      <h1>You will be redirected in : {counter}</h1>
    </div>
  );
};

export default redirection;
