const startBtn = document.getElementById("startBtn");
const scene = document.getElementById("scene");
const runner = document.getElementById("runner");
const checkpointsContainer = document.getElementById("checkpoints");
const timeline = document.getElementById("timeline");

const cvStages = [
  {
    kind: "door",
    title: "Summary About Me",
    narrative: "Runner opens the first door and reads your professional summary.",
    lines: [
      "Dynamic Oracle Fusion Test Engineer with 4 years of experience in Oracle Fusion and Oracle EBS R12.",
      "Experienced in leading QA teams, UAT, end-to-end test strategy, and stakeholder communication.",
      "Strong domain skills in P2P, O2C, AP, AR, Procurement, and GL.",
      "Uses Generative AI tools to improve test coverage and execution quality.",
    ],
  },
  {
    kind: "cloud",
    title: "Skills in the Clouds",
    narrative: "Runner reaches the cloud window and presents key skills.",
    lines: [
      "Testing: Manual, UAT, URT, Regression, Integration, Functional, Sanity, BVA.",
      "Automation: UFT and VB Script; support with Selenium-Java initiatives.",
      "Tools: Jira, ALM, Azure DevOps, UFT.",
      "AI Tools: Claude, Gemini, ChatGPT, GitHub Copilot.",
      "Methodologies: Agile and Waterfall.",
    ],
  },
  {
    kind: "tower",
    title: "Professional Experience",
    narrative: "Runner climbs the experience tower and highlights career progression.",
    lines: [
      "Resource Global Professionals (Keysight) — Test Lead (Jan 2025 – Present).",
      "Technip Energies — Lead Test Analyst (Jul 2024 – Jan 2025).",
      "Sopra Steria India — Software Engineer Testing (Jul 2022 – Jul 2024).",
      "Sopra Steria India — Junior Software Engineer Testing (Jan 2022 – Jul 2022).",
    ],
  },
  {
    kind: "door",
    title: "Major Projects",
    narrative: "Runner opens project gallery and shows impact-driven deliveries.",
    lines: [
      "F&A Transformation (R12 to Fusion): FAT, SIT, E2E, UAT readiness, P2P focus.",
      "ESI Group Acquisition: Led AP migration testing and supplier/payment validation.",
      "PT-X Bottomline: Led replacement testing; received Pinnacle Award.",
      "CPU & RPC Patching: Bi-annual full-suite regression, UAT, SIT across modules.",
    ],
  },
  {
    kind: "cloud",
    title: "Awards, Education & Contact",
    narrative: "Runner reaches final cloud and invites recruiter to connect.",
    lines: [
      "Awards: Spot Award (4x), Pinnacle Award, Falcon Award.",
      "Education: B.Sc. (Kumaun University), Intermediate Science (Navaguy School).",
      "Languages: English (Proficient), Hindi (Native). Interests: Volleyball, Hiking, Video Editing.",
      "Contact: indersin30@gmail.com | +91-8395808330 | Noida, UP, India.",
    ],
  },
];

function buildStage(stage, index) {
  const card = document.createElement("article");
  card.className = `checkpoint ${stage.kind}`;
  card.dataset.index = String(index);

  const title = document.createElement("h2");
  title.textContent = stage.title;

  const list = document.createElement("ul");
  for (const line of stage.lines) {
    const item = document.createElement("li");
    item.textContent = line;
    list.appendChild(item);
  }

  card.append(title, list);
  return card;
}

function renderStages() {
  checkpointsContainer.innerHTML = "";
  cvStages.forEach((stage, index) => {
    checkpointsContainer.appendChild(buildStage(stage, index));
  });
}

function getCards() {
  return Array.from(document.querySelectorAll(".checkpoint"));
}

function logTimeline(text) {
  const row = document.createElement("p");
  row.className = "timeline-row";
  row.textContent = `• ${text}`;
  timeline.appendChild(row);
}

function moveRunner(target) {
  const sceneRect = scene.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const x = targetRect.left - sceneRect.left + scene.scrollLeft + 20;

  runner.style.transform = `translateX(${x}px) rotateY(-18deg)`;
  scene.style.setProperty("--cam-x", `${Math.min(x / 14, 85)}px`);
  scene.scrollTo({ left: Math.max(0, x - scene.clientWidth / 2), behavior: "smooth" });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function playJourney() {
  startBtn.disabled = true;
  startBtn.textContent = "Journey in progress...";
  timeline.innerHTML = "";

  const cards = getCards();
  cards.forEach((card) => card.classList.remove("active"));
  runner.style.transform = "translateX(0px) rotateY(-18deg)";
  scene.style.setProperty("--cam-x", "0px");
  scene.scrollTo({ left: 0, behavior: "auto" });

  for (let i = 0; i < cards.length; i += 1) {
    const card = cards[i];
    moveRunner(card);
    await wait(1000);

    card.classList.add("active");
    logTimeline(cvStages[i].narrative);

    await wait(1800);
  }

  startBtn.disabled = false;
  startBtn.textContent = "Replay Journey";
}

renderStages();
startBtn.addEventListener("click", playJourney);
