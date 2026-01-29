import FlippingCatImage from "./components/FlippingCatImage.js";
import JumpingCatImage from "./components/JumpingCatImage.js";
import MenuBar from "./components/MenuBar.js";
import setupWhyCallback from "./Why.js";

customElements.define("flipping-cat-image", FlippingCatImage, {
  extends: "img",
});
customElements.define("jumping-cat-image", JumpingCatImage, { extends: "img" });
customElements.define("menu-bar", MenuBar);

setupWhyCallback();
