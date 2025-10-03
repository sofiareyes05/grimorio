document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // 1. Cargar la preferencia del usuario o el modo claro por defecto
  const savedTheme = localStorage.getItem("theme") || "light";

  // Aplicar la clase de tema guardada al inicio
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }
  // Asegurar que, si es 'light', no tiene la clase 'dark-mode' (el modo claro es el CSS por defecto)

  // 2. Función para cambiar el tema
  function toggleTheme() {
    if (body.classList.contains("dark-mode")) {
      // Cambiar a modo CLARO
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      console.log("Modo cambiado a: Claro");
    } else {
      // Cambiar a modo OSCURO
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
      console.log("Modo cambiado a: Oscuro");
    }
  }

  // 3. Listener para el botón de cambio de tema
  themeToggle.addEventListener("click", toggleTheme);
});

document.querySelectorAll(".heart-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.classList.toggle("liked");
  });
});

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
