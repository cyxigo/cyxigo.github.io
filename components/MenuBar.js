export default class MenuBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.isMenuVisible = false;

    this.setupStyles();
    this.createButtonsContainer();
    this.createToggleButton();
    this.updateMenuVisibility();
  }

  setupStyles() {
    this.style.display = "grid";
    this.style.backgroundColor = "#767676";

    Array.from(this.children).forEach((child) => {
      child.style.margin = "0";
      child.style.padding = "14px 16px";
      child.style.color = "white";
    });
  }

  createButtonsContainer() {
    const buttonsContainer = document.createElement("div");
    const buttons = this.querySelectorAll('[is="menu-bar-button"]');

    buttons.forEach((button) => {
      button.style.padding = "6px 16px";
      buttonsContainer.appendChild(button);
    });

    buttonsContainer.style.display = "grid";
    buttonsContainer.style.backgroundColor = "#606060";

    this.buttonsContainer = buttonsContainer;
    this.appendChild(this.buttonsContainer);
  }

  createToggleButton() {
    const toggleButton = document.createElement("button");
    toggleButton.innerHTML = "☰";

    toggleButton.style.border = "0";
    toggleButton.style.color = "#ffffff";
    toggleButton.style.backgroundColor = "#9c9c9cff";
    toggleButton.style.transition = "0.2s ease-in-out";
    toggleButton.style.fontSize = "20px";

    toggleButton.onclick = () => {
      this.isMenuVisible = !this.isMenuVisible;
      this.updateMenuVisibility();
    };

    toggleButton.onmouseenter = () => {
      toggleButton.style.backgroundColor = "#838383ff";
    };

    toggleButton.onmouseleave = () => {
      toggleButton.style.backgroundColor = "#9c9c9cff";
    };

    this.toggleButton = toggleButton;
    this.appendChild(this.toggleButton);
  }

  updateMenuVisibility() {
    this.buttonsContainer.style.display = this.isMenuVisible ? "grid" : "none";
    this.toggleButton.innerHTML = this.isMenuVisible ? "✕" : "☰";
  }
}
