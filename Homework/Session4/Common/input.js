class user_input {
    $Container;
    $Input;
    $error_message;
    constructor(label, type, name) {
      this.$Container = document.createElement("div");
      this.$Container.classList.add("container");
  
      this.$Input = document.createElement("input");
      this.$Input.type = type;
      this.$Input.placeholder = label;
      this.$Input.name = name;
      this.$Input.addEventListener("mouseover", this.inputMouseover);
      this.$Input.addEventListener("mouseout", this.inputMouseout);
      this.$error_message = document.createElement("div");
      this.$error_message.classList.add("error-message");
    }
    inputMouseover = () => {
      this.$Input.classList.add("focus");
    };
    inputMouseout = () => {
      this.$Input.classList.remove("focus");
    };
    getInputValue = () => {
      return this.$Input.value;
    };
    setInputValue = (newValue) => {
      this.$Input.value = newValue;
    };
    seterror_message = (errorMess) => {
      if (errorMess) {
        this.$error_message.innerHTML = "*" + errorMess;
        this.$error_message.classList.add("has-error");
      } else {
        this.$error_message.innerHTML = "";
        this.$error_message.classList.remove("has-error");
      }
    };
    Render() {
      this.$Container.append(this.$Input, this.$error_message);
      return this.$Container;
    }
  }
  export default user_input;