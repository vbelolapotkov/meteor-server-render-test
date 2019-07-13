import React from "react";
import ReactDOM from "react-dom";
import App from "/ui/app.jsx";

function renderApp() {
  console.log(`App is loaded: Greetings from ${module.id}!`);
  ReactDOM.hydrate(<App />, document.getElementById("app"));
}

export default renderApp;
