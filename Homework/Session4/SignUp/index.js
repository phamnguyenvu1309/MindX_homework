import Register from "./sign_up.js";
const app = document.getElementById("app");
const signUp = new Register();
app.appendChild(signUp.Render());