/* ==========================================================
   PAKISTAN MONSOON OUTLOOK 2026 — script.js
   Mudasir Jameel · mudasirjameel828@gmail.com
   ========================================================== */

/* ---- THEME TOGGLE ---- */
const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
let currentTheme = localStorage.getItem('mj-theme') || 'dark';
html.setAttribute('data-theme', currentTheme);

themeBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', currentTheme);
  localStorage.setItem('mj-theme', currentTheme);
  reinitChart();
});

/* ---- NAV SCROLL EFFECT ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 60
    ? currentTheme === 'dark'
      ? 'rgba(6,13,26,0.97)'
      : 'rgba(244,247,251,0.97)'
    : '';
}, { passive: true });

/* ---- HAMBURGER ---- */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));
navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navMenu.classList.remove('open')));

/* ---- ACTIVE NAV LINK ---- */
const navLinks = navMenu.querySelectorAll('a');
const allSections = document.querySelectorAll('section[id]');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: `-${65}px 0px -60% 0px` });
allSections.forEach(s => io.observe(s));

/* ---- SCROLL REVEAL ---- */
const revEls = document.querySelectorAll('.reveal');
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const d = parseInt(e.target.dataset.delay || 0);
      setTimeout(() => e.target.classList.add('in'), d);
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
revEls.forEach(el => revObs.observe(el));

// SAFETY FALLBACK: If the browser lags, force all text to appear anyway after 2.5 seconds
setTimeout(() => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}, 2500);

/* ---- DYNAMIC WINDY MAP LOADER (GPU Saver) ---- */
const mapObs = new IntersectionObserver(entries => {
  if(entries[0].isIntersecting) {
    const iframe = document.getElementById('windy-iframe');
    const loader = document.getElementById('map-loader');
    if(iframe && !iframe.src) {
      iframe.src = iframe.getAttribute('data-src');
      iframe.onload = () => {
        if(loader) loader.style.display = 'none';
        iframe.style.display = 'block';
      };
    }
    mapObs.disconnect(); // Stop observing once loaded
  }
}, {rootMargin: '200px'}); // Starts loading 200px before you scroll to it

const mapContainer = document.getElementById('map-container');
if(mapContainer) mapObs.observe(mapContainer);

/* ---- LIVE CLOCK (Pakistan UTC+5) ---- */
function tick() {
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
  const pk = new Date(utcMs + 5 * 3600000);
  const DAYS   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const MONTHS = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];
  const pad = n => String(n).padStart(2, '0');
  const te = document.getElementById('live-time');
  const de = document.getElementById('live-date');
  if (te) te.textContent = `${pad(pk.getHours())}:${pad(pk.getMinutes())}:${pad(pk.getSeconds())}`;
  if (de) de.textContent = `${DAYS[pk.getDay()]}, ${pk.getDate()} ${MONTHS[pk.getMonth()]} ${pk.getFullYear()}`;
}
tick();
setInterval(tick, 1000);

/* ---- TYPED TEXT ---- */
const phrases = [
  'Analyzing Monsoon 2026 Dynamics',
  'Tracking El Niño Pacific Signals',
  'Tracking Shawwal Crescent Sighting',
  'Decoding Arabian Sea SST Anomalies',
  'Forecasting Pakistan Rainfall Patterns',
];
let pi = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed-out');
function typeLoop() {
  if (!typedEl) return;
  const phrase = phrases[pi];
  if (deleting) {
    typedEl.textContent = phrase.slice(0, --ci);
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(typeLoop, 400); return; }
    setTimeout(typeLoop, 38);
  } else {
    typedEl.textContent = phrase.slice(0, ++ci);
    if (ci === phrase.length) { deleting = true; setTimeout(typeLoop, 2200); return; }
    setTimeout(typeLoop, 62);
  }
}
typeLoop();

/* ---- LIVE WEATHER (Open-Meteo, no API key) ---- */
const CITIES = [
  { name: 'Karachi',   lat: 24.8608, lon: 67.0104 },
  { name: 'Quetta',    lat: 30.1798, lon: 66.9750 },
  { name: 'Islamabad', lat: 33.7294, lon: 73.0931 },
  { name: 'Lahore',    lat: 31.5204, lon: 74.3587 },
  { name: 'Peshawar',  lat: 34.0150, lon: 71.5249 },
];
const WMO = {
  0:'Clear Sky', 1:'Mainly Clear', 2:'Partly Cloudy', 3:'Overcast',
  45:'Foggy', 48:'Icy Fog',
  51:'Light Drizzle', 53:'Drizzle', 55:'Dense Drizzle',
  61:'Slight Rain', 63:'Moderate Rain', 65:'Heavy Rain',
  71:'Slight Snow', 73:'Moderate Snow', 75:'Heavy Snow',
  80:'Showers', 81:'Heavy Showers', 82:'Violent Showers',
  95:'Thunderstorm', 96:'Thunderstorm + Hail', 99:'Thunderstorm + Heavy Hail',
};

function buildWeatherCard(city, data) {
  const c = data.current;
  const card = document.createElement('div');
  card.className = 'w-card glass reveal';
  card.innerHTML = `
    <div class="wc-city">${city.name}</div>
    <div class="wc-cond">${WMO[c.weather_code] || 'Variable'}</div>
    <div class="wc-temp">${c.temperature_2m != null ? c.temperature_2m.toFixed(1) + '°C' : '—'}</div>
    <div class="wc-stats">
      <div class="wc-row"><span class="wc-row-label">💧 Humidity</span><span class="wc-row-val">${c.relative_humidity_2m != null ? c.relative_humidity_2m + '%' : '—'}</span></div>
      <div class="wc-row"><span class="wc-row-label">🌬 Wind</span><span class="wc-row-val">${c.wind_speed_10m != null ? c.wind_speed_10m.toFixed(1) + ' km/h' : '—'}</span></div>
      <div class="wc-row"><span class="wc-row-label">🌡 Feels Like</span><span class="wc-row-val">${c.apparent_temperature != null ? c.apparent_temperature.toFixed(1) + '°C' : '—'}</span></div>
    </div>`;
  return card;
}
function buildErrorCard(city) {
  const card = document.createElement('div');
  card.className = 'w-card glass reveal';
  card.innerHTML = `<div class="wc-city">${city.name}</div><div class="wc-temp">—</div><div class="wc-err">Data unavailable</div>`;
  return card;
}

async function loadWeather() {
  const grid = document.getElementById('weather-grid');
  try {
    const results = await Promise.all(CITIES.map(city =>
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&wind_speed_unit=kmh&timezone=Asia%2FKarachi`)
        .then(r => r.json()).catch(() => null)
    ));
    grid.innerHTML = '';
    results.forEach((data, i) => {
      const card = (data && data.current) ? buildWeatherCard(CITIES[i], data) : buildErrorCard(CITIES[i]);
      grid.appendChild(card);
      setTimeout(() => card.classList.add('in'), i * 90 + 150);
    });
  } catch {
    grid.innerHTML = '<div class="w-loading" style="color:var(--below)">Unable to load weather data. Check your internet connection.</div>';
  }
}
loadWeather();

/* ---- PROBABILITY BAR CHART ---- */
let chartInst = null;
function buildChart() {
  const ctx = document.getElementById('probChart');
  if (!ctx) return;
  
  if (typeof Chart === 'undefined') {
    setTimeout(buildChart, 500);
    return;
  }

  if (chartInst) { chartInst.destroy(); chartInst = null; }
  const isDark = html.getAttribute('data-theme') === 'dark';
  const textColor  = isDark ? '#8aabcf' : '#1e3a5a';
  const gridColor  = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(14,100,150,0.08)';
  const labels = ['Sindh', 'S. Balochistan', 'Punjab', 'KPK', 'Northern Areas'];
  chartInst = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Below Normal %', data: [55,50,25,20,25],
          backgroundColor: isDark ? 'rgba(248,113,113,0.5)' : 'rgba(220,38,38,0.45)',
          borderColor: isDark ? '#f87171' : '#dc2626', borderWidth: 2, borderRadius: 6 },
        { label: 'Near Normal %',  data: [30,35,50,50,45],
          backgroundColor: isDark ? 'rgba(96,165,250,0.5)' : 'rgba(37,99,235,0.45)',
          borderColor: isDark ? '#60a5fa' : '#2563eb', borderWidth: 2, borderRadius: 6 },
        { label: 'Above Normal %', data: [15,15,25,30,30],
          backgroundColor: isDark ? 'rgba(74,222,128,0.5)' : 'rgba(22,163,74,0.45)',
          borderColor: isDark ? '#4ade80' : '#16a34a', borderWidth: 2, borderRadius: 6 },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: {
        legend: { labels: { color: textColor, font: { family: "'DM Sans'", size: 12 }, padding: 20 } },
        tooltip: {
          backgroundColor: isDark ? 'rgba(11,22,37,0.96)' : 'rgba(255,255,255,0.97)',
          titleColor: isDark ? '#e8f0fa' : '#0d1a2a',
          bodyColor: textColor,
          borderColor: isDark ? 'rgba(56,189,248,0.3)' : 'rgba(3,105,161,0.25)',
          borderWidth: 1, padding: 12, cornerRadius: 8,
          callbacks: { label: c => ` ${c.dataset.label}: ${c.parsed.y}%` }
        }
      },
      scales: {
        x: { ticks: { color: textColor, font: { size: 11 } }, grid: { color: gridColor }, border: { display: false } },
        y: { ticks: { color: textColor, callback: v => v + '%' }, grid: { color: gridColor }, border: { display: false }, max: 100 }
      }
    }
  });
}

// Init chart when visible
const chartEl = document.getElementById('probChart');
if (chartEl) {
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { buildChart(); }
  }, { threshold: 0.2 }).observe(chartEl.parentElement);
}
function reinitChart() { if (chartInst) buildChart(); }

/* ---- DRIVER TABS ---- */
document.querySelectorAll('.dtab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.dtab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.driver-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const panel = document.getElementById('panel-' + btn.dataset.panel);
    if (panel) {
      panel.classList.add('active');
      // Re-animate impact bar fills
      panel.querySelectorAll('.dpi-fill, .conf-fill, .dep-fill').forEach(bar => {
        const w = bar.style.width;
        bar.style.width = '0%';
        requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.width = w; }));
      });
    }
  });
});

/* ---- SMOOTH SCROLL ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 66, behavior: 'smooth' });
  });
});

/* ============================================================
   RAIN CANVAS
   ============================================================ */
(function initRain() {
  const canvas = document.getElementById('rain-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, drops = [];

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  function Drop() {
    this.reset = function () {
      this.x = Math.random() * W;
      this.y = Math.random() * H * -1;
      this.len = Math.random() * 16 + 8;
      this.spd = Math.random() * 6 + 4;
      this.alpha = Math.random() * 0.15 + 0.04;
      this.w = Math.random() * 0.7 + 0.2;
    };
    this.reset();
    this.update = function () { this.y += this.spd; this.x += this.spd * 0.13; if (this.y > H + this.len) this.reset(); };
    this.draw = function () {
      ctx.save(); ctx.globalAlpha = this.alpha;
      ctx.strokeStyle = currentTheme === 'dark' ? 'rgba(147,210,255,1)' : 'rgba(3,105,161,0.8)';
      ctx.lineWidth = this.w;
      ctx.beginPath(); ctx.moveTo(this.x, this.y); ctx.lineTo(this.x + this.len * 0.13, this.y + this.len);
      ctx.stroke(); ctx.restore();
    };
  }
  for (let i = 0; i < 100; i++) { const d = new Drop(); d.y = Math.random() * H; drops.push(d); }

  function loop() { ctx.clearRect(0, 0, W, H); drops.forEach(d => { d.update(); d.draw(); }); requestAnimationFrame(loop); }
  loop();
})();

/* ============================================================
   PARTICLE CANVAS
   ============================================================ */
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, parts = [];

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  function Particle() {
    this.reset = function () {
      this.x = Math.random() * W; this.y = Math.random() * H;
      this.r = Math.random() * 1.4 + 0.3;
      this.alpha = Math.random() * 0.35 + 0.07;
      this.spd = Math.random() * 0.25 + 0.04;
    };
    this.reset();
    this.update = function () { this.y -= this.spd; if (this.y < 0) { this.y = H; this.x = Math.random() * W; } };
    this.draw = function () {
      const c = currentTheme === 'dark' ? `rgba(56,189,248,${this.alpha})` : `rgba(3,105,161,${this.alpha * 0.7})`;
      ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = c; ctx.fill();
    };
  }
  for (let i = 0; i < 50; i++) parts.push(new Particle());

  function loop() { ctx.clearRect(0, 0, W, H); parts.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(loop); }
  loop();
})();

console.log('%c⛈  Pakistan Monsoon Outlook 2026 · Mudasir Jameel', 'color:#38bdf8;font-size:13px;font-family:monospace');