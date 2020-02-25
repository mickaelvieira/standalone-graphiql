import fetch from "isomorphic-fetch";

export default function(url) {
  return async function(graphQLParams) {
    const response = await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(graphQLParams),
    });
    return await response.json();
  }
}