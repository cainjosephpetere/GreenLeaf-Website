
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Highlight the current page in the navigation.
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const target = link.getAttribute("href").split("/").pop();
    if (target === current) link.classList.add("active");
  });

  // Demonstration form behaviour for the assignment prototype.
  document.querySelectorAll("form[data-demo]").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const notice = form.querySelector(".notice");
      if (notice) {
        notice.textContent = "Thank you. Your enquiry has been recorded for this website prototype.";
        notice.classList.add("show");
      }
      form.reset();
    });
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
});
