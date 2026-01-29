export default class JumpingCatImage extends HTMLImageElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.style.marginTop = "100px";
    this.style.animation = "jump 0.5s infinite";

    if (this.hasAttribute("delay")) {
      this.style.animationDelay = this.getAttribute("delay");
    }
  }
}
