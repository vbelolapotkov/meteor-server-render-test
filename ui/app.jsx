import React from "react";

const App = ({ name = "world" }) => (
  <main>
    <h1>Hello {name}!</h1>
  </main>
);

export default App;
