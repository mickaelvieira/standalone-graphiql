import React, { useState } from "react";
import GraphiQL from "graphiql";
import fetcher from "./helpers/fetcher";
import Message from "./Message";
import Form from "./Form";
import { checkURL } from "./helpers/url";

import "graphiql/graphiql.css";

export default function App() {
  const [url, setURL] = useState("")
  const isValid = checkURL(url);
  const isEmpty = url === "";

  return (
    <>
      <Form onChange={setURL} />
      {isEmpty && <Message message="Enter the URL of the server you want to query" />}
      {!isEmpty && !isValid && <Message message={`The URL '${url}' does not seem to be valid`} / >}
      {isValid && <GraphiQL fetcher={fetcher(url)} />}
    </>
  )
}