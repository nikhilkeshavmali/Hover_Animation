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
