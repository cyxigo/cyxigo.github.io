export default class FlippingCatImage extends HTMLImageElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.style.marginTop = "30px";
    this.style.marginBottom = "20px";
    this.style.animation = "flip 1s infinite";

    if (this.hasAttribute("delay")) {
      this.style.animationDelay = this.getAttribute("delay");
    }
  }
}
