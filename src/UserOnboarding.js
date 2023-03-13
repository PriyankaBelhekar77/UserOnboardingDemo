class UserOnboarding {
  #iFrame = document.createElement("iframe");

  constructor(src, width = '35%', height = '100vw', backgroundColor = '#FFFFFF') {
    this.src = src;
    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor;
  }

  #createIFrame() {
    const iframe = document.createElement("iframe");
    iframe.src = this.src;
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
  }
}

window.userOnboarding = UserOnboarding;

export default UserOnboarding;
