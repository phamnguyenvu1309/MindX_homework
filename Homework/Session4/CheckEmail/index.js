class CheckEmailScreen {
  $mainContainer;
  constructor() {
    this.$mainContainer = document.createElement("div");
    this.$mainContainer.innerHTML = `
    <div class="forny-inner">
        <div class="d-flex flex-column align-items-center mail">
        <div class="col-12">
            <div class="text-center">
            
            </div>
        </div>
        <div class="col-5 text-center mail">
            <h1>Confirm your email!</h1>
            <p>
            Your Account have been suscessfully regitered. To complete the
            process, please check your email for a validation request
            </p>
            <p>
            If you wait it too long. You can
            <a href="mailto:" class="link">click here</a> to login
            </p>
        </div>
        </div>
    </div>
    `;
  }
  Render() {
    return this.$mainContainer;
  }
}
export default CheckEmailScreen;
