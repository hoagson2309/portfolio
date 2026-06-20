const projects = window.PORTFOLIO_PROJECTS || [];

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");
const project = projects.find(item => item.id === projectId);

function getCategoryLabel(cat) {
  const labels = { ai: "AI & Machine Learning", embedded: "Embedded Systems" };
  return labels[cat] || cat;
}

function renderProjectMedia(project) {
  const mount = document.querySelector("#projectMedia");
  if (!mount) return;

  if (project.mediaType === "video") {
    mount.innerHTML = `
      <video controls playsinline poster="${project.poster || ""}">
        <source src="${project.media}" type="video/mp4" />
      </video>
    `;
    return;
  }

  mount.innerHTML = `<img src="${project.media}" alt="${project.title}" />`;
}

function renderProject() {
  if (!project) {
    document.querySelector("main").innerHTML = `
      <section class="container" style="padding:80px 0;text-align:center;">
        <h1>Project not found</h1>
        <p class="hero-description">This project does not exist.</p>
        <div class="button-row" style="justify-content:center;margin-top:24px;">
          <a class="button" href="index.html#projects"><i class="fa fa-arrow-left"></i> Back to Projects</a>
        </div>
      </section>
    `;
    return;
  }

  document.title = `${project.title} — Son Cao`;

  document.querySelector("#projectCategory").textContent = getCategoryLabel(project.category);
  document.querySelector("#projectTitle").textContent = project.title;
  document.querySelector("#projectSubtitle").textContent = project.subtitle;
  document.querySelector("#projectClient").textContent = project.client;
  document.querySelector("#projectYear").textContent = project.year;
  document.querySelector("#projectRole").textContent = project.role || "Developer";
  document.querySelector("#projectDescription").textContent = project.description || "";
  document.querySelector("#projectChallenge").textContent = project.challenge || "";
  document.querySelector("#projectOutcome").textContent = project.outcome || "";

  const toolsMount = document.querySelector("#projectTools");
  toolsMount.innerHTML = (project.tools || [])
    .map(tool => `<span class="tag">${tool}</span>`)
    .join("");

  renderProjectMedia(project);
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

renderProject();
