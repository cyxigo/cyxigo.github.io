export default class TremblingCatImage extends HTMLImageElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.style.marginTop = "30px";
    this.style.marginBottom = "20px";
    this.style.animation = "tremble 0.1s infinite";

    if (this.hasAttribute("delay")) {
      this.style.animationDelay = this.getAttribute("delay");
    }
  }
}
