import React from "react";
import GraphiQL from "graphiql";
import fetch from "isomorphic-fetch";
import "graphiql/graphiql.css";

async function graphQLFetcher(graphQLParams) {
  const response = await fetch(process.env.REACT_APP_GRAPH_QL_ENDPOINT, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams),
  });
  return await response.json();
}

const App = () => (<GraphiQL fetcher={graphQLFetcher} />)

export default App;