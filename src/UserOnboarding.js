// import { VALIDATE_ARGS } from "../constants";
const DOMAIN_REGEX = '^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$';

const VALIDATE_ARGS = {
  domainLink: {
    argName: 'domainLink',
    regex: DOMAIN_REGEX,
    error: '[1SilverBullet][user-onboarding] URL link provided is invalid. Please pass correct URL'
  },
  accessToken: {
    argName: 'accessToken',
    regex: '^[0-9a-fA-F]{64}$',
    error: '[1SilverBullet][user-onboarding] Access token provided is invalid.'
  },
  // onClose: {
  //   argName: 'onClose',
  //   type: 'function',
  //   error: '[1SilverBullet][user-onboarding] onClose callback provided is invalid. Please pass a function only'
  // }
};

class UserOnboarding {
  #iFrame = document.createElement("iframe");

  constructor({ domainLink, accessToken, width = '35%', height = '100vw', backgroundColor = '#FFFFFF' }) {
    UserOnboarding.#evaluateArgs(
      domainLink,
      VALIDATE_ARGS.domainLink.argName
    );
    UserOnboarding.#evaluateArgs(
      accessToken,
      VALIDATE_ARGS.accessToken.argName
    );

    this.domainLink = domainLink;
    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor;
  }

  static #evaluateArgs(arg, argName) {
    if (arg === undefined || arg === null || !arg) {
      throw new Error(
        `[1SilverBullet][user-onboarding] ${argName} is not passed but is required`
      );
    }

    if (!arg.match(VALIDATE_ARGS[argName].regex)) {
      throw new Error(VALIDATE_ARGS[argName].error);
    }
  }

  #createIFrame() {
    const iframe = document.createElement("iframe");
    iframe.src = this.domainLink;
    iframe.className = "user-onboarding-iframe";
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.width = this.width;
    iframe.height = this.height;
    iframe.style.border = "none";
    iframe.style.backgroundColor = this.backgroundColor;
    iframe.style.display = "flex";
    iframe.style.justifyContent = "center";
    iframe.style.alignItems = "center";
    iframe.style.boxShadow = "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)";

    this.#iFrame = iframe;
    return iframe;
  }

  #renderIFrame() {
    const iframe = this.#createIFrame();
    document.body.append(iframe);
  }

  start() {
    this.#renderIFrame();
    // if (this.src === "") {
    //   alert("Please enter valid search url!!");
    // } else {
    // this.#renderIFrame();
    // }
  }
}

window.userOnboarding = UserOnboarding;

export default UserOnboarding;
