import user_input from "../Common/input.js";
import LoginUser from "../Login/index.js";
import app from "../app.js";
import CheckEmailScreen from "../CheckEmail/index.js";
import { createNewAccout } from "../firebase/auth.js";

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
    this.$title.classList.add("p__title");
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
    this.$link.addEventListener("click", this.handleChangeScreen);

    this.$span = document.createElement("span");
    this.$span.innerHTML = "Already a member? ";
  }
  handleSubmit = async (evt) => {
    evt.preventDefault();

    //lay giá trị nhập từ Input vào
    const username = this.$userName.getInputValue();
    const email = this.$email.getInputValue();
    const pass = this.$password.getInputValue();
    const confimPass = this.$confimPassword.getInputValue();

    //Khai báo error cho từng Input đầu vào
    this.$userName.seterror_message(null);
    this.$email.seterror_message(null);
    this.$password.seterror_message(null);
    this.$confimPassword.seterror_message(null);

    var checkEmail =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var checkUserName = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g;

    if (!username) {
      this.$userName.seterror_message("Tên đăng nhập không được để trống!");
      return;
    }
    if (!checkUserName.test(username)) {
      this.$userName.seterror_message("Tên đăng nhập không hợp lệ");
      return;
    }

    if (!email) {
      this.$email.seterror_message("Email không được để trống!");
      return;
    }
    if (!checkEmail.test(email)) {
      this.$email.seterror_message("Hãy nhập email hợp lệ.\nExample@gmail.com");
      return;
    }
    if (pass.length < 6 || pass.length == 0) {
      this.$password.seterror_message(
        "Mật khẩu không hợp lệ, phải lớn hơn 6 kí tự!"
      );
      return;
    }
    if (pass != confimPass) {
      this.$confimPassword.seterror_message("Mật khẩu chưa khớp");
      return;
    }
    alert("Đăng kí thành công!!!!");
    await createNewAccout(email, pass);
    const checkemail = new CheckEmailScreen();
    app.changeActiveScreen(checkemail, "Check Email");
    this.clearForm();
  };

  handleChangeScreen = (e) => {
    e.preventDefault();
    const login = new LoginUser();
    app.changeActiveScreen(login, "Login");
  };
  clearForm = () => {
    this.$userName.clearInputValue(null);
    this.$email.clearInputValue(null);
    this.$password.clearInputValue(null);
    this.$confimPassword.clearInputValue(null);
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