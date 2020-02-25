import React from "react";
import Input from "./Input";

export default function Form({ onChange }) {

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target)
    onChange(data.get("url"));
  }

  return (
    <form className="graphiql-form" onSubmit={handleSubmit}>
      <Input />
      <button className="graphiql-form__submit">Change</button>
    </form>
  )
}