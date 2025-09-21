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

  // Init
  showSection(location.hash);

  // Menu clicks
	["click", "mouseenter"].forEach(evt => {
	  links.forEach(l => {
		l.addEventListener(evt, e => {
		  e.preventDefault();
		  const href = l.getAttribute("href");
		  history.pushState(null, "", href);
		  showSection(href);
		});
	  });
	});


  // Back/forward
  window.addEventListener("popstate", () => showSection(location.hash));

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
});
