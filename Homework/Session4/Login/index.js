import user_input from "../Common/input.js";
import Register from "../SignUp/sign_up.js";
import app from "../app.js";
import { loginWithEmailPass } from "../firebase/auth.js";
class LoginUser {
  $container;
  $title;
  $link;
  $span;

  $formRegister;
  $email;
  $password;

  $btnSubmit;
  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("containerForm");

    this.$title = document.createElement("p");
    this.$title.classList.add("p__title");
    this.$title.innerHTML = "Login";

    this.$formRegister = document.createElement("form");
    this.$formRegister.classList.add("formLogin");
    this.$formRegister.addEventListener("submit", this.handleSubmit);

    this.$email = new InputControl("Email", "text", "email");
    this.$password = new InputControl("Password", "password", "password");

    this.$btnSubmit = document.createElement("button");
    this.$btnSubmit.type = "submit";
    this.$btnSubmit.innerHTML = "Login";

    this.$link = document.createElement("a");
    this.$link.innerHTML = "Register";
    this.$link.addEventListener("click", this.handleChangeScreen);

    this.$span = document.createElement("span");
    this.$span.innerHTML = "Not a member? ";
  }
  handleSubmit = (e) => {
    e.preventDefault();

    //lay giá trị nhập từ Input vào
    const email = this.$email.getInputValue();
    const pass = this.$password.getInputValue();

    //Khai báo error cho từng Input đầu vào
    this.$email.setErrorMsg(null);
    this.$password.setErrorMsg(null);

    var checkEmail =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!email) {
      this.$email.setErrorMsg("Email không được để trống!");
      return;
    }
    if (!checkEmail.test(email)) {
      this.$email.setErrorMsg("Email không hợp lệ");
      return;
    }
    if (pass.length < 6 || pass.length == 0) {
      this.$password.setErrorMsg(
        "Mật khẩu không hợp lệ, phải lớn hơn 6 kí tự!"
      );
      return;
    }
    alert("Đăng nhập thành công!");
    loginWithEmailPass(email, pass);
    this.clearForm();
  };
  handleChangeScreen = (err) => {
    err.preventDefault();
    const register = new Register();
    app.changeActiveScreen(register, "Register");
  };

  clearForm = () => {
    this.$email.clearInputValue(null);
    this.$password.clearInputValue(null);
  };

  Render() {
    this.$formRegister.append(
      this.$title,
      this.$email.Render(),
      this.$password.Render(),
      this.$btnSubmit,
      this.$span,
      this.$link
    );
    this.$container.append(this.$formRegister);
    return this.$container;
  }
}
export default LoginUser;
