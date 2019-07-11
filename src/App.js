import React from "react";
import GraphiQL from "graphiql";
import fetch from "isomorphic-fetch";
import "graphiql/graphiql.css";

async function graphQLFetcher(graphQLParams) {
  const response = await fetch(`http:${process.env.REACT_APP_GRAPH_QL_ENDPOINT}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams),
  });
  return await response.json();
}

const client = new window.SubscriptionsTransportWs.SubscriptionClient(`ws:${process.env.REACT_APP_GRAPH_QL_ENDPOINT}`, { reconnect: true });
const fetcher = window.GraphiQLSubscriptionsFetcher.graphQLFetcher(client, graphQLFetcher);

const App = () => (<GraphiQL fetcher={fetcher} />)

export default App;