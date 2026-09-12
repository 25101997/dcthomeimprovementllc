function expandImage(id) {
  const carousel = document.getElementById(id);
  if (!carousel) return;

  carousel.classList.add("full-img");
  document.body.style.overflow = "hidden";
}

function closeExpandedImage(id) {
  const carousel = document.getElementById(id);
  if (!carousel) return;

  carousel.classList.remove("full-img");
  document.body.style.overflow = "";
}

function initializeQuoteButtons() {
  const buttons = document.querySelectorAll(".btn-get-quote");
  const modal = document.getElementById("form-get-quote");

  buttons.forEach(button => {
    if (button.dataset.quoteBound === "true") return;

    button.dataset.quoteBound = "true";
    button.addEventListener("click", () => {
      if (!modal) return;

      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";

      const serviceTitle = button.dataset.title;
      if (serviceTitle) {
        const possibleFields = modal.querySelectorAll("input, textarea, select");

        possibleFields.forEach(field => {
          const fieldName = `${field.name || ""} ${field.id || ""} ${field.placeholder || ""}`.toLowerCase();

          if (
            fieldName.includes("service") ||
            fieldName.includes("project") ||
            fieldName.includes("subject")
          ) {
            field.value = serviceTitle;
          }
        });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("mobile-menu-btn");
  const nav = document.getElementById("main-nav");
  const modal = document.getElementById("form-get-quote");
  const closeButton = document.getElementById("close-form");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  initializeQuoteButtons();

  if (closeButton && modal) {
    closeButton.addEventListener("click", () => {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    });
  }

  if (modal) {
    modal.addEventListener("click", event => {
      if (event.target === modal) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      }
    });
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      if (modal) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
      }

      document.querySelectorAll(".full-img").forEach(item => {
        item.classList.remove("full-img");
      });

      document.body.style.overflow = "";
    }
  });
});
