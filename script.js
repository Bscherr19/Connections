// EDIT HERE: Update agenda items, rooms, descriptions, prompts, challenges, and resource links in these arrays.
const scheduleData = {
  tuesday: [
    { time: "8:30-9:00 AM", title: "Greet & Check-In", location: "Midway", audience: "All arrivals", description: "Sign in, pick up your badge, agenda, and welcome materials." },
    { time: "8:30-9:00 AM", title: "Externs Arrive", location: "Kedzie", audience: "Externs", description: "Career Day check-in, coffee, welcome packets, and name tags." },
    { time: "9:00-9:30 AM", title: "Welcome & Office Tour", location: "Kedzie", audience: "Externs", description: "Get oriented to the office and meet the early careers team." },
    { time: "9:30-10:00 AM", title: "Early Careers Programs Overview", location: "Kedzie", audience: "Externs", description: "Learn how the early careers programs connect across roles and pathways." },
    { time: "10:00-11:00 AM", title: "Apprentice Alumni Panel", location: "Kedzie", audience: "Externs", description: "Hear practical reflections from alumni about learning, growth, and career navigation." },
    { time: "11:30 AM-12:30 PM", title: "Lunch", location: "Kedzie", audience: "Externs", description: "Lunch break and informal networking." },
    { time: "12:00-1:00 PM", title: "Service Project: Kit Building", location: "Loop North", audience: "Early Careers", description: "Assemble community care kits and connect through a hands-on give-back activity." },
    { time: "1:30-2:00 PM", title: "TDP/FDP Alumni Panel", location: "Kedzie", audience: "Externs", description: "Explore early-career journeys and lessons from TDP/FDP alumni." },
    { time: "2:00-2:30 PM", title: "Center Stage with Sean Barry", location: "Kedzie", audience: "Externs", description: "Leadership conversation with Allstate talent acquisition perspective." },
    { time: "2:30-3:00 PM", title: "Welcome to Broader Programming", location: "Midway", audience: "All cohorts", description: "Transition into the shared Early Careers Connections programming." },
    { time: "3:00-4:00 PM", title: "Opening Community Builders", location: "Midway, Loop North, Loop South", audience: "Interns, TDP/FDP, Apprentices", description: "Cohort-based activities to help participants meet people and build energy." },
    { time: "4:00-4:30 PM", title: "Closing Remarks + Group Photo", location: "Kedzie / Midway", audience: "All cohorts", description: "Wrap the first day, take a group photo, and share hotel check-in reminders." },
    { time: "5:00-5:30 PM", title: "Meet for AceBounce Walkover", location: "Hotel lobby", audience: "Travelers", description: "Gather outside the hotel before walking to the evening social." },
    { time: "5:30-6:30 PM", title: "Dinner & Social at AceBounce", location: "AceBounce", audience: "All invited", description: "Dinner, games, and casual connection time." }
  ],
  wednesday: [
    { time: "8:30-9:00 AM", title: "Coffee & Welcome", location: "Glass North", audience: "All participants", description: "Grab refreshments and settle in before the first session." },
    { time: "9:00-9:30 AM", title: "Center Stage with Christina Metzger", location: "Glass North", audience: "Early Careers", description: "Keynote with the VP of Customer Experience." },
    { time: "9:00-9:30 AM", title: "Welcome + Office Tour", location: "Bronzeville", audience: "Externs", description: "Extern orientation and office tour." },
    { time: "9:30-10:00 AM", title: "Break / EC Programs Overview", location: "Glass North / Bronzeville", audience: "All participants", description: "Refresh, transition, and learn more about early careers pathways." },
    { time: "10:00-11:00 AM", title: "Customer Experience Immersion", location: "Glass North", audience: "Early Careers", description: "Interactive session focused on the customer experience space." },
    { time: "10:00-11:00 AM", title: "Panel: Evolving Roles", location: "Bronzeville", audience: "Externs", description: "Panel discussion on how roles grow and shift over time." },
    { time: "11:00 AM-12:00 PM", title: "Design Thinking", location: "Glass North", audience: "Early Careers", description: "Build problem-solving muscle through a design thinking session." },
    { time: "11:00 AM-12:00 PM", title: "Team Shadowing", location: "Bronzeville", audience: "Externs", description: "Observe teams and learn how work happens in practice." },
    { time: "12:00-1:00 PM", title: "Catered Lunch", location: "Midway", audience: "All participants", description: "Lunch together and announcements for afternoon sessions." },
    { time: "1:00-1:30 PM", title: "Business Challenge Kickoff", location: "Midway", audience: "Challenge groups", description: "Set up the CX Innovation Challenge and group expectations." },
    { time: "1:30-3:30 PM", title: "Group Work", location: "Midway, Loop North, Loop South", audience: "Challenge groups", description: "Work in teams, use coaches, and prepare MVP pitches." },
    { time: "3:30-4:00 PM", title: "Gather for Pitches", location: "Midway", audience: "Challenge groups", description: "Transition back together and get ready to present." },
    { time: "4:00-4:30 PM", title: "MVP Pitches", location: "Midway, Loop North, Loop South", audience: "Challenge groups", description: "Share your group's solution, timing, and key thinking." },
    { time: "4:30-5:00 PM", title: "Regroup / Dismiss", location: "Midway", audience: "All participants", description: "Close the day and review evening plans." },
    { time: "5:00-5:30 PM", title: "Scavenger Hunt / Walking Tours", location: "The Mart area", audience: "Optional", description: "Optional activity for participants who want more connection time." }
  ],
  thursday: [
    { time: "8:30-9:00 AM", title: "Welcome & Transition", location: "Midway", audience: "All participants", description: "Get oriented and choose your own adventure for the day." },
    { time: "9:00-10:00 AM", title: "TDP/FDP Graduation", location: "Midway", audience: "TDP/FDP", description: "Celebrate program graduates with certificates and community recognition." },
    { time: "9:00-10:00 AM", title: "Communicate to Influence", location: "Loop North", audience: "All participants", description: "Build skills to present ideas with clarity and impact." },
    { time: "9:00-10:00 AM", title: "Career Rock Wall Panel", location: "Loop South", audience: "All participants", description: "Hear career journeys and pivots from the Arity team." },
    { time: "10:00-11:00 AM", title: "Energy for Life: People Connections", location: "Midway", audience: "All participants", description: "Wellness and people-connection session." },
    { time: "10:00-11:00 AM", title: "Beyond AI Foundations", location: "Loop South", audience: "All participants", description: "Explore practical AI applications and what comes after the basics." },
    { time: "12:00-1:00 PM", title: "Catered Lunch", location: "Midway", audience: "All groups", description: "Lunch together before afternoon sessions." },
    { time: "1:00-2:30 PM", title: "Extern Team Shadowing / Work Time", location: "Pulaski", audience: "Externs", description: "Shadow teams and complete focused work time." },
    { time: "1:00-1:30 PM", title: "AI Coaching: Drop-In", location: "Loop South", audience: "Optional", description: "Bring questions, prompts, or workflow ideas for AI coaching." },
    { time: "1:30-3:30 PM", title: "Emotional Intelligence", location: "Midway", audience: "All participants", description: "Two-hour session focused on self-awareness, communication, and relationships." },
    { time: "1:30-2:30 PM", title: "Networking", location: "Loop North", audience: "Optional", description: "Open time to connect with leaders and peers." },
    { time: "3:30-4:30 PM", title: "Early Careers Showcase", location: "Midway", audience: "All participants", description: "Spotlight hidden gems, small brags, quick skills, and early career energy." },
    { time: "4:30-5:00 PM", title: "Regroup / Dismiss", location: "Midway", audience: "All participants", description: "Review Friday schedule and close the day." },
    { time: "5:00 PM", title: "Dinner on Your Own", location: "Chicago", audience: "All participants", description: "Free evening to recharge or connect informally." }
  ],
  friday: [
    { time: "8:00-9:00 AM", title: "Arrival & AV Check", location: "Midway", audience: "All participants", description: "Arrive, settle in, and complete final room checks." },
    { time: "10:00-11:30 AM", title: "Collaborating in a Global Workspace", location: "Midway", audience: "All participants", description: "Learn how to work effectively across global teams and time zones." },
    { time: "11:30 AM-12:00 PM", title: "Dismissal - Main Group", location: "Midway", audience: "All participants", description: "Final goodbyes, feedback collection, and safe travel reminders." },
    { time: "12:00-12:30 PM", title: "Program Complete", location: "Midway", audience: "All participants", description: "Wrap up the week and head home safely." }
  ]
};

// EDIT HERE: Add, remove, or rewrite networking prompts.
const prompts = [
  "What is one project you are proud of working on?",
  "What is one skill you are trying to build this year?",
  "What surprised you most about your early career experience?",
  "What is a small win you have had recently?",
  "What is one thing you wish more people understood about your role?",
  "What is a tool, app, or shortcut that helps you work better?",
  "What is one career lesson you learned the hard way?",
  "What is something outside of work that gives you energy?",
  "What is one question you wish people asked you more often?",
  "What is one piece of advice you would give someone starting your role?",
  "What is a team habit that makes work smoother?",
  "What is a meeting you actually found useful, and why?",
  "What is one thing you learned from a manager, mentor, or teammate?",
  "What is a career myth you used to believe?",
  "What is something you are curious about at Allstate?",
  "What is one moment when you felt more confident at work?",
  "What is a work challenge you are proud of navigating?",
  "What is one Chicago spot or event you would recommend?",
  "What is one question you have about another early careers program?",
  "What is one way AI has changed how you work or learn?"
];

// EDIT HERE: Add, remove, or rewrite Mayhem Move challenges.
const challenges = [
  "Find someone whose role sounds completely different from yours.",
  "Ask someone what their hidden gem skill is.",
  "Introduce two people who have not met yet.",
  "Ask someone what they are excited to learn next.",
  "Find someone who can teach you one work shortcut.",
  "Ask someone what they would put on their professional hype playlist.",
  "Find someone from a different program and compare one thing you are both learning.",
  "Ask someone what they would want a mentor to know about their early career experience.",
  "Trade one LinkedIn tip or profile improvement idea with someone.",
  "Find someone who has been to The Mart before and ask for one navigation tip."
];

// EDIT HERE: Bingo squares stay local to the device and do not leave the browser.
const bingoItems = [
  "Met someone from a different program",
  "Found someone with a shared hobby",
  "Learned about a role I did not know",
  "Connected with someone on LinkedIn",
  "Asked someone about a project",
  "Met someone from a different school or team",
  "Shared one career goal",
  "Learned one new resource",
  "Found someone who uses AI at work",
  "Met someone who has been to The Mart",
  "Asked a panelist a question",
  "Learned a new Chicago tip",
  "Cheered during the showcase",
  "Found a possible coffee chat",
  "Wrote down one next step"
];

// EDIT HERE: Replace href values with Microsoft Forms, SharePoint, or other resource links.
const resources = [
  { title: "LinkedIn Connection Tips", description: "A quick reminder for sending specific, thoughtful connection requests.", href: "#" },
  { title: "STAR Method Refresher", description: "Structure stories around Situation, Task, Action, and Result.", href: "#" },
  { title: "90-Second Pitch Builder", description: "Shape a concise intro for coffee chats, panels, and networking.", href: "#" },
  { title: "Coffee Chat Questions", description: "Prompts that make follow-up conversations feel more natural.", href: "#" },
  { title: "Follow-Up Email Template", description: "A simple note you can personalize after meeting someone today.", href: "#" },
  { title: "Reflection Questions", description: "Capture what you learned and what you want to do next.", href: "#" }
];

const bingoStorageKey = "connectionsHqBingo";
const reflectionStorageKey = "connectionsHqReflections";

const scheduleList = document.querySelector("#schedule-list");
const scheduleSearch = document.querySelector("#schedule-search");
const dayTabs = document.querySelectorAll(".day-tab");
const promptOutput = document.querySelector("#prompt-output");
const challengeOutput = document.querySelector("#challenge-output");
const bingoGrid = document.querySelector("#bingo-grid");
const resourceGrid = document.querySelector("#resource-grid");
const reflectionFields = document.querySelectorAll("[data-reflection]");

let activeDay = "tuesday";

function pickRandom(items, currentText) {
  if (items.length < 2) return items[0] || "";
  let next = currentText;
  while (next === currentText) {
    next = items[Math.floor(Math.random() * items.length)];
  }
  return next;
}

function renderSchedule() {
  const query = scheduleSearch.value.trim().toLowerCase();
  const items = scheduleData[activeDay].filter((item) => {
    const searchable = `${item.time} ${item.title} ${item.location} ${item.audience} ${item.description}`.toLowerCase();
    return searchable.includes(query);
  });

  scheduleList.innerHTML = items.length
    ? items.map((item) => `
      <article class="schedule-card">
        <div class="time-block">${item.time}</div>
        <div>
          <h3>${item.title}</h3>
          <div class="meta-row">
            <span class="tag">${item.location}</span>
            <span class="tag alt">${item.audience}</span>
          </div>
          <p>${item.description}</p>
        </div>
      </article>
    `).join("")
    : `<p class="empty-state">No sessions match that search yet.</p>`;
}

function renderBingo() {
  const checked = JSON.parse(localStorage.getItem(bingoStorageKey) || "[]");
  bingoGrid.innerHTML = bingoItems.map((item, index) => {
    const isChecked = checked.includes(index);
    return `<button class="bingo-card ${isChecked ? "is-checked" : ""}" type="button" data-bingo-index="${index}" aria-pressed="${isChecked}">${item}</button>`;
  }).join("");
}

function toggleBingo(index) {
  const checked = JSON.parse(localStorage.getItem(bingoStorageKey) || "[]");
  const next = checked.includes(index) ? checked.filter((item) => item !== index) : [...checked, index];
  localStorage.setItem(bingoStorageKey, JSON.stringify(next));
  renderBingo();
}

function renderResources() {
  resourceGrid.innerHTML = resources.map((resource) => `
    <article class="resource-card">
      <div>
        <h3>${resource.title}</h3>
        <p>${resource.description}</p>
      </div>
      <a class="button secondary" href="${resource.href}" data-placeholder-link>Open Resource</a>
    </article>
  `).join("");
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.left = "-999px";
    document.body.appendChild(helper);
    helper.select();
    const didCopy = document.execCommand("copy");
    helper.remove();
    return didCopy;
  }
}

function loadReflections() {
  const saved = JSON.parse(localStorage.getItem(reflectionStorageKey) || "{}");
  reflectionFields.forEach((field) => {
    field.value = saved[field.dataset.reflection] || "";
  });
}

function saveReflections() {
  const values = {};
  reflectionFields.forEach((field) => {
    values[field.dataset.reflection] = field.value;
  });
  localStorage.setItem(reflectionStorageKey, JSON.stringify(values));
}

dayTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeDay = tab.dataset.day;
    dayTabs.forEach((item) => item.classList.toggle("active", item === tab));
    renderSchedule();
  });
});

scheduleSearch.addEventListener("input", renderSchedule);

document.querySelector("#new-prompt").addEventListener("click", () => {
  promptOutput.textContent = pickRandom(prompts, promptOutput.textContent);
});

document.querySelector("#new-challenge").addEventListener("click", () => {
  challengeOutput.textContent = pickRandom(challenges, challengeOutput.textContent);
});

bingoGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-bingo-index]");
  if (!card) return;
  toggleBingo(Number(card.dataset.bingoIndex));
});

document.querySelector("#reset-bingo").addEventListener("click", () => {
  localStorage.removeItem(bingoStorageKey);
  renderBingo();
});

document.querySelector("#copy-email").addEventListener("click", async () => {
  const copied = await copyText(document.querySelector("#email-template").textContent);
  document.querySelector("#copy-status").textContent = copied ? "Template copied." : "Copy failed. You can still select the text manually.";
});

reflectionFields.forEach((field) => {
  field.addEventListener("input", saveReflections);
});

document.querySelector("#clear-reflection").addEventListener("click", () => {
  localStorage.removeItem(reflectionStorageKey);
  loadReflections();
});

document.addEventListener("click", (event) => {
  const placeholder = event.target.closest("[data-placeholder-link]");
  if (!placeholder || placeholder.getAttribute("href") !== "#") return;
  event.preventDefault();
  placeholder.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-3px)" },
      { transform: "translateX(3px)" },
      { transform: "translateX(0)" }
    ],
    { duration: 180 }
  );
});

renderSchedule();
renderBingo();
renderResources();
loadReflections();
