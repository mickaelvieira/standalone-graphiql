import React from "react";
import GraphiQL from "graphiql";
import fetch from "isomorphic-fetch";
import "graphiql/graphiql.css";

const endpoint = `${window.location.origin}/graphql`

async function graphQLFetcher(graphQLParams) {
  const response = await fetch(endpoint, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams),
  });
  return await response.json();
}

const App = () => (<GraphiQL fetcher={graphQLFetcher} />)

export default App;