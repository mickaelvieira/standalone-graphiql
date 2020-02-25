import React, { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("")

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <label className="graphiql-form__label" htmlFor="url" >
      <input 
        className="graphiql-form__input" 
        type="text" 
        id="url" 
        name="url" 
        value={value} 
        onChange={handleChange} 
      />
    </label>
  )
}