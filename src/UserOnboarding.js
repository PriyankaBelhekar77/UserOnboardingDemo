class UserOnboarding {
  #iFrame = document.createElement("iframe");

  constructor(props) {
    this.src = props.src;
  }

  #createIFrame() {
    const iframe = document.createElement("iframe");
    iframe.src = this.src;
    iframe.className = "user-onboarding-iframe";
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.width = "35%";
    iframe.style.height = "100vw";
    iframe.style.border = "none";
    iframe.style.backgroundColor = "#FFFFFF";
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
