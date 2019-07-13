import { onPageLoad } from "meteor/server-render";
console.log(`Common bundle is loaded: Greetings from ${module.id}!`);

onPageLoad(async () => {
  console.log("Page loaded on the client");
  if (isRobot()) {
    console.log(`I'm in a robot environment. Don't need to load app bundle`);
    return;
  }
  const renderApp = (await import("/client/app.js")).default;
  renderApp();
});

function isRobot() {
  return Math.random() > 0.5;
}
