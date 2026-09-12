const services = [
  {
    title: "Bathroom Remodeling",
    description: "Transform your bathroom with professional remodeling, tile installation, showers, vanities, flooring, and finishing work."
  },
  {
    title: "Kitchen Remodeling",
    description: "Update your kitchen with professional carpentry, flooring, painting, drywall, and remodeling services."
  },
  {
    title: "Basement Remodeling",
    description: "Turn your unfinished or outdated basement into a comfortable, functional living space."
  },
  {
    title: "Decks & Porches",
    description: "Build, replace, repair, or upgrade your deck or porch with quality materials and professional craftsmanship."
  },
  {
    title: "Interior & Exterior Painting",
    description: "Professional preparation, priming, painting, and finishing for interior and exterior surfaces."
  },
  {
    title: "Drywall & Plaster",
    description: "From new drywall installation to repairs and plaster finishing, we deliver smooth, professional results."
  },
  {
    title: "Carpentry",
    description: "Professional interior and exterior carpentry, including trim, doors, windows, PVC/AZEK, siding repairs, and more."
  },
  {
    title: "Flooring",
    description: "Professional installation of vinyl plank, hardwood, carpet, and other flooring materials."
  }
];

const projects = [
  {
    id: "carousel_project_1",
    title: "Deck Upgrade To Composite",
    images: [
      "images/items/Deck Upgrade To Composite 1.jpeg",
      "images/items/Deck Upgrade To Composite 2.jpeg"
    ]
  },
  {
    id: "carousel_project_2",
    title: "Basement Remodel",
    images: [
      "images/items/Basement Remodel 1.jpeg",
      "images/items/Basement Remodel 2.jpeg"
    ]
  },
  {
    id: "carousel_project_3",
    title: "Ceiling Remodel And Paint",
    images: [
      "images/items/Ceiling Remodel And Paint 1.jpeg",
      "images/items/Ceiling Remodel And Paint 2.jpeg"
    ]
  },
  {
    id: "carousel_project_4",
    title: "Drywall",
    images: [
      "images/items/Drywall 1.jpeg",
      "images/items/Drywall 2.jpeg",
      "images/items/Drywall 3.jpeg",
      "images/items/Drywall 4.jpeg",
      "images/items/Drywall 5.jpeg"
    ]
  },
  {
    id: "carousel_project_5",
    title: "Bathroom Remodel",
    images: [
      "images/items/Bathroom Repair And Paint 1.jpeg",
      "images/items/Bathroom Repair And Paint 2.jpeg",
      "images/items/Bathroom Repair And Paint 3.jpeg"
    ]
  },
  {
    id: "carousel_project_6",
    title: "Carpet Removal and Install",
    images: [
      "images/items/Carpet Removal and Install 1.jpeg"
    ]
  },
  {
    id: "carousel_project_7",
    title: "Interior & Exterior Painting",
    images: [
      ""
    ]
  }
];

function renderServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;

  container.innerHTML = services.map((service, index) => `
    <article class="service-card">
      <div class="service-number">${String(index + 1).padStart(2, "0")}</div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </article>
  `).join("");
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = projects.map((project, projectIndex) => {
    const slides = project.images.map((image, imageIndex) => `
      <div class="carousel-item ${imageIndex === 0 ? "active" : ""}">
        <div class="img-service-container">
          <img
            src="${image}"
            class="img-service"
            alt="${project.title} - photo ${imageIndex + 1}"
            loading="lazy">
        </div>
      </div>
    `).join("");

    return `
      <article class="project-card">
        <div id="${project.id}" class="carousel slide project-carousel" data-bs-ride="false">

          <div class="close-full-img">
            <button
              type="button"
              class="btn btn-light"
              onclick="closeExpandedImage('${project.id}')">
              Close
            </button>
          </div>

          <div class="carousel-inner">
            ${slides}
          </div>

          ${project.images.length > 1 ? `
            <button class="carousel-control-prev" type="button" data-bs-target="#${project.id}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#${project.id}" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          ` : ""}
        </div>

        <div class="project-card-body">
          <h3>${project.title}</h3>

          <div class="project-card-actions">
            <button
              class="btn-primary-site btn-get-quote"
              type="button"
              data-title="${project.title}">
              Get Quote
            </button>

            <button
              class="btn-outline-site"
              type="button"
              onclick="expandImage('${project.id}')">
              View Photos
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  initializeQuoteButtons();
}

document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderProjects();
});
