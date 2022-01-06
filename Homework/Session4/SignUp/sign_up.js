import user_input from "../Common/input.js";
class Register {
  $container;
  $title;
  $link;
  $span;

  $formRegister;
  $userName;
  $email;
  $password;
  $confimPassword;

  $btnSubmit;
  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("containerForm");

    this.$title = document.createElement("p");
    this.$title.innerHTML = "Sign Up";

    this.$formRegister = document.createElement("form");
    this.$formRegister.classList.add("formSignUp");
    this.$formRegister.addEventListener("submit", this.handleSubmit);

    this.$userName = new user_input("User Name", "text", "username");
    this.$email = new user_input("Email", "text", "email");
    this.$password = new user_input("Password", "password", "password");
    this.$confimPassword = new user_input(
      "ConfimPassword",
      "password",
      "confimPass"
    );
    this.$btnSubmit = document.createElement("button");
    this.$btnSubmit.type = "submit";
    this.$btnSubmit.innerHTML = "Register";

    this.$link = document.createElement("a");
    this.$link.innerHTML = "Login";
    this.$link.target = "_blank";
    this.$link.setAttribute("href", "../Login/login.html");

    this.$span = document.createElement("span");
    this.$span.innerHTML = "Already a member? ";
  }
  handleSubmit = (e) => {
    e.preventDefault();

    //lay giá trị nhập từ Input vào
    const username = this.$userName.getInputValue();
    const email = this.$email.getInputValue();
    const pass = this.$password.getInputValue();
    const confimPass = this.$confimPassword.getInputValue();

    //Khai báo error cho từng Input đầu vào
    this.$userName.setErrorMsg(null);
    this.$email.setErrorMsg(null);
    this.$password.setErrorMsg(null);
    this.$confimPassword.setErrorMsg(null);

    var checkEmail =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var checkUserName = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g;

    if (!username) {
      this.$userName.setErrorMsg("Username is required");
      return;
    }
    if (!checkUserName.test(username)) {
      this.$userName.setErrorMsg("Username is invalid");
      return;
    }

    if (!email) {
      this.$email.setErrorMsg("Email is required");
      return;
    }
    if (!checkEmail.test(email)) {
      this.$email.setErrorMsg("Email is invalid");
      return;
    }
    if (pass.length < 8 || pass.length > 16) {
      this.$password.setErrorMsg(
        "Password must be between 8 and 16 characters"
      );
      return;
    }
    if (pass != confimPass) {
      this.$confimPassword.setErrorMsg("ConfimPassword is invalid");
      return;
    }
  };
  Render() {
    this.$formRegister.append(
      this.$title,
      this.$userName.Render(),
      this.$email.Render(),
      this.$password.Render(),
      this.$confimPassword.Render(),
      this.$btnSubmit,
      this.$span,
      this.$link
    );
    this.$container.append(this.$formRegister);
    return this.$container;
  }
}
export default Register;