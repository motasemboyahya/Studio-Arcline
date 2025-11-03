
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
  });


  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-container")) {
      navLinks.classList.remove("active");
      mobileMenuBtn.classList.remove("active");
    }
  });

 
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      mobileMenuBtn.classList.remove("active");
    });
  });
}


const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();


    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);


    console.log("Form submitted:", data);

 
    alert("Thank you for your message! We will get back to you soon.");

    contactForm.reset();
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

let lastScroll = 0;
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    nav.style.boxShadow = "none";
  }

  lastScroll = currentScroll;
});
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    const project = {
      title: card.dataset.title,
      category: card.dataset.category,
      image: card.dataset.image,
      description: card.dataset.description,
    };
    localStorage.setItem("selectedProject", JSON.stringify(project));
    window.location.href = "projects-info.html";
  });
});
const project = JSON.parse(localStorage.getItem("selectedProject"));
if (project) {
  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("projectCategory").textContent = project.category;
  document.getElementById("projectImage").src = project.image;
  document.getElementById("projectImage").alt = project.title;
  document.getElementById("projectDescription").textContent =
    project.description;
} else {
  document.querySelector(".project-info-section").innerHTML =
    '<p>No project data found. <a href="projects.html">Back to Projects</a></p>';
}
