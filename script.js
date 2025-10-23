
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const scrollY = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    if (scrollY >= offset && scrollY < offset + height) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      msg.textContent = "Message sent!";
      msg.style.color = "green";
      form.reset();
    } else {
      msg.textContent = "Please complete all fields.";
      msg.style.color = "red";
    }
  });
}
