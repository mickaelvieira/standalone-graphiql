import React from "react";
import Logo from "./Logo";

export default function Message({ message }) {
  return (
    <div className="graphiql-form__message">
      <div className="graphiql-form__logo">
        <Logo />
      </div>
      <div>
        {message}
      </div>  
    </div>
  )
}