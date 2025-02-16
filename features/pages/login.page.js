import Page from "./page.js";


class LoginPage extends Page {
      get loginBtn() { return $('#login-button') };
      get errorMessage() { return $('.error-message-container') };

      async open(link) {
            await super.open(link);
      }

      async submitLoginBtn() {
            await this.loginBtn.click();
      }

      async errorMessageIsHidden() {
            await this.errorMessage.waitForExist();
      };

}

export default new LoginPage()