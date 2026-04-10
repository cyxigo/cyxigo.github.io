export default class MenuBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const changeLocation = (location) => {
      document.location = "/" + location;
    };

    const about = document.createElement("button");
    about.innerText = "About";
    about.style.borderBottomColor = "#969696";
    about.onclick = () => changeLocation("");

    const music = document.createElement("button");
    music.innerText = "Music";
    music.style.borderBottomColor = "#5ae6ff";
    music.onclick = () => changeLocation("music");

    const projects = document.createElement("button");
    projects.innerText = "Projects";
    projects.style.borderBottomColor = "#ff5757";
    projects.onclick = () => changeLocation("projects");

    this.appendChild(about);
    this.appendChild(music);
    this.appendChild(projects);
  }
}
