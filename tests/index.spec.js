import React from "react";
import ReactDOM from "react-dom";
import App from "../src/index";

it("renders", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);
  expect(root.innerHTML).toContain("Start writing your app here");
});
