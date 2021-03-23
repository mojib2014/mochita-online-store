import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./app/store";

const render = () => {
  ReactDOM.render(
    <Router>
      <React.StrictMode>
        <App state={store.getState()} dispatch={store.dispatch} />
      </React.StrictMode>
    </Router>,
    document.getElementById("root"),
  );
};

render();
store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
