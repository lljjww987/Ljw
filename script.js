const text = "浩哥1024程序员节快乐！！👀 🫦 🎉";
let index = 0;
const speed = 200; // Speed of the text appearance in milliseconds
const textElement = document.getElementById("text");

function typeWriter() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;