(function () {
  const W = window.WORKOUT;
  const KEY = "yw.v1";
  const app = document.getElementById("app");
  const title = document.getElementById("title");
  const back = document.getElementById("back");
  const dot = document.getElementById("status");

  const today = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  const save = (s) => localStorage.setItem(KEY, JSON.stringify(s));
  // state: { done: {date: dayId}, checks: {date: {exId: true}} }
  const isDone = () => !!(load().done || {})[today()];

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const allEx = W.days.flatMap((d) => d.exercises.map((e) => ({ ...e, day: d })));

  function iconUrl(done) {
    const c = document.createElement("canvas");
    c.width = c.height = 180;
    const x = c.getContext("2d");
    x.fillStyle = done ? "#1e9e4a" : "#c0392b";
    x.fillRect(0, 0, 180, 180);
    x.strokeStyle = x.fillStyle = "#fff";
    x.lineCap = x.lineJoin = "round";
    x.lineWidth = 14;
    x.beginPath();
    if (done) { x.moveTo(45, 95); x.lineTo(78, 128); x.lineTo(138, 56); x.stroke(); }
    else {
      x.fillRect(24, 76, 14, 28); x.fillRect(142, 76, 14, 28);
      x.fillRect(42, 60, 18, 60); x.fillRect(120, 60, 18, 60); x.fillRect(60, 84, 60, 12);
    }
    return c.toDataURL("image/png");
  }

  function updateStatus() {
    const done = isDone();
    dot.className = "dot" + (done ? " done" : "");
    dot.title = done ? "Workout done today" : "No workout logged today";
    const url = iconUrl(done);
    document.querySelectorAll('link[rel="apple-touch-icon"], link[rel="icon"]').forEach((l) => l.remove());
    ["apple-touch-icon", "icon"].forEach((rel) => {
      const l = document.createElement("link");
      l.rel = rel; l.href = url;
      document.head.appendChild(l);
    });
    document.querySelector('meta[name="theme-color"]').content = done ? "#1e9e4a" : "#c0392b";
    if (navigator.setAppBadge) (done ? navigator.clearAppBadge() : navigator.setAppBadge(1)).catch(() => {});
  }

  function toggleDone(dayId) {
    const s = load();
    s.done = s.done || {};
    if (s.done[today()]) delete s.done[today()]; else s.done[today()] = dayId;
    save(s);
    route();
  }

  function home() {
    title.textContent = "Rugby Workout";
    back.hidden = true;
    const done = isDone();
    app.innerHTML = `
      <div class="banner ${done ? "done" : ""}">${done ? "Workout done today" : "No workout logged today"}</div>
      ${W.days.map((d) => `
        <a class="card" href="#/day/${d.id}">
          <h2>${esc(d.name)}: ${esc(d.focus)}</h2>
          <small>${d.exercises.length} exercises</small>
        </a>`).join("")}
      <section class="guide">
        <h3>Goal</h3><p>${esc(W.objective)}</p>
        ${W.guidelines.map(([h, t]) => `<h3>${esc(h)}</h3><p>${esc(t)}</p>`).join("")}
      </section>`;
  }

  function day(id) {
    const d = W.days.find((x) => String(x.id) === id);
    if (!d) return home();
    title.textContent = d.name;
    back.hidden = false;
    const checks = (load().checks || {})[today()] || {};
    const done = isDone();
    app.innerHTML = `
      <p class="big">${esc(d.focus)}</p>
      ${d.exercises.map((e) => `
        <div class="card ex">
          <input type="checkbox" data-ex="${e.id}" ${checks[e.id] ? "checked" : ""} aria-label="Done: ${esc(e.name)}" />
          <a class="name" href="#/ex/${e.id}">
            <b>${esc(e.name)}</b>
            <span class="reps">${e.sets} sets &times; ${esc(e.reps)}</span>
            <small class="muted"><br>View diagram</small>
          </a>
          <span class="chev">&rsaquo;</span>
        </div>`).join("")}
      <button class="main ${done ? "done" : ""}" id="done">${done ? "Workout logged today (tap to undo)" : "I did today's workout"}</button>`;
    app.querySelectorAll("input[data-ex]").forEach((i) => i.addEventListener("change", () => {
      const s = load();
      s.checks = s.checks || {};
      s.checks[today()] = s.checks[today()] || {};
      s.checks[today()][i.dataset.ex] = i.checked;
      save(s);
    }));
    document.getElementById("done").addEventListener("click", () => toggleDone(d.id));
  }

  function exercise(id) {
    const e = allEx.find((x) => x.id === id);
    if (!e) return home();
    title.textContent = e.name;
    back.hidden = false;
    back.href = `#/day/${e.day.id}`;
    const poses = (window.POSES || {})[id] || [];
    app.innerHTML = `
      <p class="big">${e.sets} sets &times; ${esc(e.reps)}</p>
      <p>${esc(e.summary)}</p>
      ${poses.map((p, i) => `<div class="diagram">${window.renderPose(p)}<p>${i + 1}. ${esc(p.l)}</p></div>`).join("")}
      <h3>How to do it</h3>
      <ol>${e.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
      <p class="muted">Rest 60 to 90 seconds between sets. Stop if you feel sharp or pinching pain.</p>`;
  }

  function route() {
    back.href = "#/";
    const [, kind, id] = location.hash.split("/");
    if (kind === "day") day(id); else if (kind === "ex") exercise(id); else home();
    window.scrollTo(0, 0);
    updateStatus();
  }

  window.addEventListener("hashchange", route);
  route();
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("service-worker.js").catch(() => {});
})();
