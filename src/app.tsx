import * as React from "react";
import * as ReactDOM from "react-dom";
import products from "./products";
import "./styles.scss";

class App extends React.Component<{}> {
  render() {
    return <div className="App">Start writing your app here.</div>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);