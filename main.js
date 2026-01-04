import FlippingCatImage from "./components/cat-images/FlippingCatImage.js";
import JumpingCatImage from "./components/cat-images/JumpingCatImage.js";
import TremblingCatImage from "./components/cat-images/TremblingCatImage.js";
import MenuBar from "./components/MenuBar.js";
import MenuBarButton from "./components/MenuBarButton.js";
import setupWhyCallback from "./components/Why.js";

customElements.define("flipping-cat-image", FlippingCatImage, {
  extends: "img",
});
customElements.define("jumping-cat-image", JumpingCatImage, { extends: "img" });
customElements.define("trembling-cat-image", TremblingCatImage, {
  extends: "img",
});
customElements.define("menu-bar", MenuBar);
customElements.define("menu-bar-button", MenuBarButton, { extends: "a" });

setupWhyCallback();
