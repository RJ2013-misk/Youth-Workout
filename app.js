
let DATA = {};
const STORAGE_KEY = 'rtw_log_v1';
let currentDay = 'Day 1';
let deferredPrompt;

async function loadData(){
  const res = await fetch('workout_data.json');
  DATA = await res.json();
}

function byId(id){ return document.getElementById(id); }

function dayColor(day){
  if(day==='Day 1') return 'var(--day1)';
  if(day==='Day 2') return 'var(--day2)';
  return 'var(--day3)';
}

function getLog(){
  try{ return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch(e){ return {}; }
}

function setLog(log){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
}

function renderExercises(day){
  currentDay = day;
  const container = byId('exerciseList');
  container.innerHTML = '';
  const dayData = DATA[day] || [];
  const log = getLog();
  const dayLog = log[day] || {};

  dayData.forEach((ex, idx)=>{
    const key = ex.exercise;
    const exLog = dayLog[key] || {sets:[{w:'',r:''},{w:'',r:''},{w:'',r:''}], done:false};

    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('h3');
    title.textContent = ex.exercise;
    card.appendChild(title);

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.innerHTML = `<span class="badge">${ex.machine}</span> \n      <span class="badge">Target: ${ex.target_sets} x ${ex.target_reps}</span>`;
    card.appendChild(meta);

    const instr = document.createElement('div');
    instr.className = 'instructions';
    instr.textContent = ex.instructions;
    card.appendChild(instr);

    // Inputs grid
    const grid = document.createElement('div');
    grid.className = 'grid';

    for(let s=0; s<3; s++){
      const cellW = document.createElement('div');
      cellW.className = 'cell';
      const lblW = document.createElement('label');
      lblW.textContent = `Set ${s+1} Weight (lb)`;
      const inpW = document.createElement('input');
      inpW.type = 'number';
      inpW.min = '0'; inpW.max = '1000'; inpW.step = '0.5';
      inpW.value = exLog.sets?.[s]?.w ?? '';
      inpW.addEventListener('input', ()=>{ exLog.sets[s].w = inpW.value; savePartial(day, key, exLog); });
      cellW.append(lblW, inpW);

      const cellR = document.createElement('div');
      cellR.className = 'cell';
      const lblR = document.createElement('label');
      lblR.textContent = `Set ${s+1} Reps`;
      const inpR = document.createElement('input');
      inpR.type = 'number';
      inpR.min = '1'; inpR.max = '50'; inpR.step = '1';
      inpR.value = exLog.sets?.[s]?.r ?? '';
      inpR.addEventListener('input', ()=>{ exLog.sets[s].r = inpR.value; savePartial(day, key, exLog); });
      cellR.append(lblR, inpR);

      grid.append(cellW, cellR);
    }

    card.appendChild(grid);

    const row = document.createElement('div');
    row.className = 'row';
    const doneWrap = document.createElement('label');
    doneWrap.className = 'row';
    const doneBox = document.createElement('input');
    doneBox.type = 'checkbox';
    doneBox.checked = !!exLog.done;
    doneBox.addEventListener('change', ()=>{ exLog.done = doneBox.checked; savePartial(day, key, exLog); });
    const doneTxt = document.createElement('span'); doneTxt.textContent = 'Completed';
    doneWrap.append(doneBox, doneTxt);

    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = day;
    badge.style.background = '#0b1328';
    badge.style.borderColor = '#334155';
    badge.style.color = '#cbd5e1';

    row.append(doneWrap, badge);
    card.appendChild(row);

    container.appendChild(card);
  });

  document.body.style.background = '#0b1020';
  document.querySelector('header').style.background = `linear-gradient(180deg, ${dayColor(day)}, transparent)`;
}

function savePartial(day, exKey, exLog){
  const log = getLog();
  if(!log[day]) log[day] = {};
  log[day][exKey] = exLog;
  setLog(log);
}

function saveAll(){
  // Nothing to do since we save on change, but keep for UX
  const btn = document.getElementById('saveBtn');
  btn.textContent = 'Saved!';
  setTimeout(()=> btn.textContent = 'Save', 1000);
}

function exportProgress(){
  const data = getLog();
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'workout_progress.json';
  a.click();
}

function resetDay(){
  const log = getLog();
  if(confirm(`Reset entries for ${currentDay}?`)){
    log[currentDay] = {};
    setLog(log);
    renderExercises(currentDay);
  }
}

function renderChecklist(){
  const list = document.getElementById('checklistItems');
  list.innerHTML = '';
  const items = ['Warm-up (5–8 min)','Chest Press','Seated Row','Lat Pulldown','Rear Delt','Core','Cooldown + Mobility'];
  const state = getLog()._checklist || {};
  items.forEach(txt=>{
    const li = document.createElement('li');
    const span = document.createElement('span'); span.textContent = txt;
    const chk = document.createElement('input'); chk.type = 'checkbox'; chk.checked = !!state[txt];
    chk.addEventListener('change', ()=>{
      const log = getLog();
      if(!log._checklist) log._checklist = {};
      log._checklist[txt] = chk.checked;
      setLog(log);
      if(chk.checked){ li.style.borderColor = '#16a34a'; }
      else{ li.style.borderColor = '#23314e'; }
    });
    if(chk.checked){ li.style.borderColor = '#16a34a'; }
    li.append(span, chk);
    list.appendChild(li);
  });
}

function switchTab(tab){
  document.querySelectorAll('.tab').forEach(b=> b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p=> p.classList.remove('active'));
  document.querySelector(`.tab[data-tab="${tab}"]`).classList.add('active');
  document.getElementById(tab).classList.add('active');
}

function initTabs(){
  document.querySelectorAll('.tab').forEach(btn=>{
    btn.addEventListener('click', ()=> switchTab(btn.dataset.tab));
  });
}

function initDays(){
  document.querySelectorAll('.day-btn').forEach(btn=>{
    btn.addEventListener('click', ()=> renderExercises(btn.dataset.day));
  });
}

// PWA install prompt
window.addEventListener('beforeinstallprompt', (e)=>{
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById('installBtn');
  btn.classList.remove('hidden');
});

document.getElementById('installBtn').addEventListener('click', async ()=>{
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
  document.getElementById('installBtn').classList.add('hidden');
});

// Service worker
if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('service-worker.js');
  });
}

// Buttons
byId('saveBtn').addEventListener('click', saveAll);
byId('exportBtn').addEventListener('click', exportProgress);
byId('resetBtn').addEventListener('click', resetDay);

// Boot
(async function(){
  await loadData();
  initTabs();
  initDays();
  renderExercises('Day 1');
  renderChecklist();
})();
