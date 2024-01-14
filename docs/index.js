import { Button } from "../index.js";

document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.getElementById("app");
  const button = new Button("Click me");
  button.render(appContainer);
});
