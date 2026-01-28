export default class MenuBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.isMenuVisible = false;

    this.createTitle();
    this.createButtons();
    this.setupStyles();
    this.createButtonsContainer();
    this.createToggleButton();
    this.updateMenuVisibility();
  }

  setupStyles() {
    Array.from(this.children).forEach((child) => {
      child.style.margin = "0";
      child.style.padding = "14px 16px";
      child.style.color = "white";
    });
  }

  createTitle() {
    const title = document.createElement("h2");
    title.innerText = "cyxigo";

    this.appendChild(title);
  }

  createButtons() {
    const buttons = [];
    const isInPagesFolder = window.location.pathname.includes("/pages/");

    const aboutMe = document.createElement("button");
    aboutMe.innerText = "About Me";
    aboutMe.onclick = () => {
      document.location = isInPagesFolder ? "../index.html" : "./index.html";
    };

    const myMusic = document.createElement("button");
    myMusic.innerText = "My Music";
    myMusic.onclick = () => {
      document.location = isInPagesFolder
        ? "./music.html"
        : "./pages/music.html";
    };

    const myProjects = document.createElement("button");
    myProjects.innerText = "My Projects";
    myProjects.onclick = () => {
      document.location = isInPagesFolder
        ? "./projects.html"
        : "./pages/projects.html";
    };

    buttons.push(aboutMe, myMusic, myProjects);
    this.buttons = buttons;
  }

  createButtonsContainer() {
    const buttonsContainer = document.createElement("div");

    this.buttons.forEach((button) => {
      button.style.backgroundColor = "#606060";
      button.style.transition = "0.2s ease-in-out";
      button.style.padding = "6px 16px";
      button.style.textAlign = "left";
      button.style.fontSize = "12px";

      button.onmouseenter = () => {
        button.style.backgroundColor = "#474747ff";
      };

      button.onmouseleave = () => {
        button.style.backgroundColor = "#606060";
      };

      buttonsContainer.appendChild(button);
    });

    buttonsContainer.style.flexDirection = "column";
    buttonsContainer.style.backgroundColor = "#606060";

    this.buttonsContainer = buttonsContainer;
    this.appendChild(this.buttonsContainer);
  }

  createToggleButton() {
    const toggleButton = document.createElement("button");
    toggleButton.innerHTML = "☰";

    toggleButton.style.backgroundColor = "#9c9c9cff";
    toggleButton.style.transition = "0.2s ease-in-out";
    toggleButton.style.fontSize = "22px";
    toggleButton.style.fontFamily = "Arial";
    toggleButton.style.borderBottomLeftRadius = "6px";
    toggleButton.style.borderBottomRightRadius = "6px";

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
    this.buttonsContainer.style.display = this.isMenuVisible ? "flex" : "none";
    this.toggleButton.innerHTML = this.isMenuVisible ? "✕" : "☰";
  }
}
