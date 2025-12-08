function why() {
  messages = [
    "Why would you do that.",
    "Why.",
    "Hey, is clicking on random cats okay?",
    "This is definitely a cat.",
    "Meow???",
    "Meow.",
    "Meow",
    ":3",
    ">:3",
    "OwO",
    "UwU",
    "Stop.",
    "Do not the cat.",
    "Cat.",
    "[[Hyperlink Blocked]]",
    "Hi",
    "Hello",
  ];

  alert(messages[Math.floor(Math.random() * messages.length)]);
}

const images = document.querySelectorAll("img");

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    img.onclick = why;
  });
});
