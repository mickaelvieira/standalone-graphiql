import React, { useState } from "react";
import GraphiQL from "graphiql";
import "graphiql/graphiql.css";
import fetcher from "./fetcher";

function checkURL(value) {
  try {
    const _ = new URL(value);
    return true;
  } catch(e) {
    return false;
  }
}

export default function App() {
  const [value, setValue] = useState("")
  const isValid = checkURL(value);
  const isEmpty = value === "";

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form className="graphiql-form" onSubmit={handleSubmit}>
        <label className="graphiql-form__label" htmlFor="url" >URL</label>
        <input className="graphiql-form__input" type="text" id="url" name="url" value={value} onChange={(event) => setValue(event.target.value)} />
        <button className="graphiql-form__submit">Change</button>
      </form>
      {isEmpty && <div className="graphiql-form__message">Please provide a URL</div>}
      {!isEmpty && !isValid && <div className="graphiql-form__message">Please provide a valid URL</div>}
      {isValid && <GraphiQL fetcher={fetcher(value)} />}
    </>
  )
}