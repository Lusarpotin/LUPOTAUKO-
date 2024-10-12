// Home button
document.getElementById("home").addEventListener("click", function () {
  window.location.href = "index.html";
});

// Search button functionality (example with a prompt)
document.getElementById("search").addEventListener("click", function () {
  let query = prompt("Enter your search query:");
  if (query) {
    alert("You searched for: " + query);
  }
});

// Blog button
document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// About button
document.getElementById("about").addEventListener("click", function () {
  alert("This website is about creating a user-friendly experience for users.");
});

// Contact button
document.getElementById("contact").addEventListener("click", function () {
  alert("Email: example@example.com\nContact Number: 123-456-7890");
});

// Running text in slide
let slideText = document.getElementById("slide-text");
setInterval(() => {
  slideText.textContent = "New updates regarding the website... Stay tuned!";
}, 3000);
