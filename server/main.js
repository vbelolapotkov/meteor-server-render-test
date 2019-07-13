import { Meteor } from "meteor/meteor";
import React from "react";
import { renderToString } from "react-dom/server";
import { onPageLoad } from "meteor/server-render";
import App from "/ui/app.jsx";

Meteor.startup(() => {
  // Code to run on server startup.
  console.log("Server has started");
});

onPageLoad(sink => {
  // Code to run on every request.
  sink.renderIntoElementById("app", renderToString(<App />));
});
