/* Project data. Add new projects here using the same structure. */
const projectData = {
  wordcraft: {
    title: "WordCraft",
    stack: "Godot Engine, GDScript, SQLite, Firebase",
    description: [
      "WordCraft is an Android educational game made to improve the English literacy of Grade VI students. It was my capstone project at STI College Balayan (February 2025 to February 2026), built with interactive word-building gameplay and a curriculum-aligned progression system.",
      "I handled narrative and theme design for each stage, co-designed the level maps, built the database-driven main menu, and wrote core gameplay scripts in GDScript. I also configured and integrated SQLite and Firebase.",
      "On the QA side, I tested across multiple Android OS versions and physical devices, diagnosed errors and crashes, deployed and troubleshot on devices and emulators, and debugged issues to improve reliability."
    ],
    image: "images/wordcraft.png",
    note: "Disclaimer: WordCraft is for Android devices only. It will not run on PC or iOS.",
    links: [{ label: "Download APK", href: "WordCraft.apk", download: true }]
  },
  PythonGame: {
    title: "Python Game",
    stack: "Python, Pygame",
    description: [
      "A Zelda-style 2D action mini game built with Pygame as a school project. It is a demo, with player movement, melee attacks, switchable weapons and magic, and an upgrade menu.",
      "I followed the Clearcode Pygame tutorial as a base and used it to practice game structure, sprites, and managing a project on GitHub."
    ],
    image: "images/python.png",
    note: "Requires Python and Pygame (pip install pygame)",
    links: [
      { label: "View on GitHub", href: "https://github.com/AnthonyNoche-Dev/Python-Game" },
      { label: "Download for PC", href: "Python Game.zip", download: true }
    ]
  },
  radmedics: {
    title: "RADMedics website",
    stack: "PHP, Laravel, Blade, Databases",
    description: [
      "RADMedics Corporation is a healthcare education organization in Mandaluyong City that trains emergency medical professionals in Emergency Medical Services (EMS).",
      "As a Website Developer Intern (February to May 2026), I maintained and continued development of the official website: updating features based on project requirements, troubleshooting issues, keeping content and functionality running day to day, and working with backend data and database components."
    ],
    image: "images/radmedics-logo.png",
    imageClass: "detail-logo",
    links: [{ label: "Visit website", href: "https://www.radmedicsph.com", external: true }]
  }
};

const modal = document.getElementById("project-modal");
const body = document.getElementById("modal-body");
let lastFocus = null;

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function openProject(id) {
  const p = projectData[id];
  if (!p) return;
  lastFocus = document.activeElement;
  const links = (p.links || []).map((l, i) => {
    const attrs = l.download ? "download" : 'target="_blank" rel="noopener noreferrer"';
    return `<a class="btn ${i ? "ghost" : "primary"}" href="${esc(l.href)}" ${attrs}>${esc(l.label)}</a>`;
  }).join("");
  body.innerHTML = `
    ${p.image ? `<img class="detail-img ${p.imageClass || ""}" src="${esc(p.image)}" alt="${esc(p.title)}">` : ""}
    <h2>${esc(p.title)}</h2>
    <p class="stack">${esc(p.stack)}</p>
    ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
    ${p.description.map(t => `<p>${esc(t)}</p>`).join("")}
    ${links ? `<div class="modal-actions">${links}</div>` : ""}`;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".close-button").focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}

modal.querySelector(".close-button").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
window.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });