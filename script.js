// Simple content switcher with active menu highlight
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".content-region");
  const links = document.querySelectorAll(".main-menu a");

  function showSection(hash) {
    sections.forEach(s => s.classList.add("hide"));
    links.forEach(l => l.classList.remove("active"));

    const id = hash || "#home";
    const section = document.querySelector(id);
    if (section) section.classList.remove("hide");

    const activeLink = document.querySelector(`.main-menu a[href="${id}"]`);
    if (activeLink) activeLink.classList.add("active");
  }

  // Initial load
  showSection(location.hash);

  // Handle clicks
  links.forEach(l => {
    l.addEventListener("click", e => {
      e.preventDefault();
      const href = l.getAttribute("href");
      history.pushState(null, "", href);
      showSection(href);
    });
  });

  // Handle back/forward
  window.addEventListener("popstate", () => showSection(location.hash));

  // Year in footer
  document.getElementById("year").textContent = new Date().getFullYear();
});
