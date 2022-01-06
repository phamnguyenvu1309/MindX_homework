import user_input from "../Common/input.js";
class Login {
  $container;
  $title;
  $link;
  $span;

  $formRegister;
  $userName;
  $password;

  $btnSubmit;
  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("containerForm");

    this.$title = document.createElement("p");
    this.$title.innerHTML = "Login";

    this.$formRegister = document.createElement("form");
    this.$formRegister.classList.add("formLogin");
    this.$formRegister.addEventListener("submit", this.handleSubmit);

    this.$userName = new user_input("User Name", "text", "username");
    this.$password = new user_input("Password", "password", "password");

    this.$btnSubmit = document.createElement("button");
    this.$btnSubmit.type = "submit";
    this.$btnSubmit.innerHTML = "Login";

    this.$link = document.createElement("a");
    this.$link.innerHTML = "Register";
    this.$link.target = "_blank";
    this.$link.setAttribute("href", "../SignUp/signup.html");

    this.$span = document.createElement("span");
    this.$span.innerHTML = "Not a member? ";
  }
  handleSubmit = (e) => {
    e.preventDefault();

    //lay giá trị nhập từ Input vào
    const username = this.$userName.getInputValue();
    const pass = this.$password.getInputValue();

    //Khai báo error cho từng Input đầu vào
    this.$userName.setErrorMsg(null);
    this.$password.setErrorMsg(null);

    var checkUserName = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g;

    if (!username) {
      this.$userName.setErrorMsg("Username is required");
      return;
    }
    if (!checkUserName.test(username)) {
      this.$userName.setErrorMsg("Invalid username, please try again!");
      return;
    }
    if (pass.length < 8 || pass.length > 18 ) {
      this.$password.setErrorMsg(
        "Password must be between 8 and 18 characters long!"
      );
      return;
    }
  };

  Render() {
    this.$formRegister.append(
      this.$title,
      this.$userName.Render(),
      this.$password.Render(),
      this.$btnSubmit,
      this.$span,
      this.$link
    );
    this.$container.append(this.$formRegister);
    return this.$container;
  }
}
export default Login;