✨ Hover Image Effect

This project demonstrates a modern hover effect where images follow the mouse cursor inside each element block.
Built with HTML, CSS, and Vanilla JavaScript.

🚀 Features

🎯 Image follows mouse cursor on hover

🎨 Smooth fade-in & fade-out animation

🖼️ Multiple elements with unique images

💻 Fully responsive & lightweight (no frameworks)

🛠️ Tech Stack

HTML5 → Structure of the page

CSS3 → Styling, transitions & positioning

JavaScript (Vanilla JS) → Mouse tracking & hover logic

📂 Project Structure
📁 Hover-Image-Effect
 ┣ 📄 index.html
 ┣ 📄 style.css
 ┗ 📄 script.js

📝 Code Overview
HTML
<div id="main">
  <div class="elem">
    <h1>Openheimer</h1>
    <img src="your-image-url.jpg" alt="" />
  </div>
  <div class="elem">
    <h1>Joe Root</h1>
    <img src="your-image-url.jpg" alt="" />
  </div>
</div>

CSS
.elem {
  position: relative;
  border: 1px solid #444;
}

.elem img {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
}

JavaScript
var elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
  var img = elem.querySelector("img");

  elem.addEventListener("mousemove", function (e) {
    const rect = elem.getBoundingClientRect();
    img.style.left = e.clientX - rect.left + "px";
    img.style.top = e.clientY - rect.top + "px";
    img.style.opacity = 1;
  });

  elem.addEventListener("mouseleave", function () {
    img.style.opacity = 0;
  });
});

📌 How to Run

Clone this repository

git clone https://github.com/your-username/hover-image-effect.git


Open index.html in your browser

Hover over elements → the image follows your mouse 🎉

🌟 Future Enhancements

Add smooth delay effect (cursor chase animation)

Add different styles per element (glow, scale, blur)

Use GSAP animations for advanced motion effects
