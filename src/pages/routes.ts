import React from "react";

interface Props {
  path: string;
  component: React.ReactElement;
}

let routes: Props[] = [];
const context = require.context(".", true, /route.tsx$/);
context.keys().forEach((path: string) => {
  console.log("context(`${path}`)) :>> ", context(`${path}`));
  routes.push(context(`${path}`).default);
});

export default routes;
