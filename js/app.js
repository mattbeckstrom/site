/* =====================================================================
   RENDERING LOGIC — shared by all pages.
   Each page sets <body data-page="...">; only the matching block runs.
   You rarely need to edit this file.
   ===================================================================== */
const $ = s => document.querySelector(s);

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  // Footer year (all pages)
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  // Shared card builders
  function writingCard(w){
    const link = w.url ? ` <a href="${w.url}" target="_blank" rel="noopener">[link]</a>` : "";
    return `<div class="item">
      <h3><span class="year">${w.year}</span>${w.authors}</h3>
      <p style="margin-top:2px"><strong style="color:var(--text)">${w.title}</strong>${link}<br>${w.detail}</p>
    </div>`;
  }
  function presCard(p){
    return `<div class="item">
      <h3><span class="year">${p.year}</span>${p.title}</h3>
      <p class="meta">${p.venue} · ${p.month} ${p.year}</p>
    </div>`;
  }

  if (page === "home") {
    $("#bio-text").textContent = DATA.bio;
    $("#badges").innerHTML = DATA.badges.map(b=>`<span class="badge">${b}</span>`).join("");
    $("#home-writing").innerHTML = DATA.writings.slice(0,3).map(writingCard).join("");
    $("#home-presentations").innerHTML = DATA.presentations.slice(0,3).map(presCard).join("");
  }

  if (page === "writing") {
    function render(filter=""){
      const f = filter.toLowerCase();
      const rows = DATA.writings.filter(w =>
        !f || `${w.title} ${w.authors} ${w.year} ${w.detail}`.toLowerCase().includes(f));
      $("#writing-list").innerHTML = rows.map(writingCard).join("") ||
        `<p style="color:var(--text-dim)">No matches.</p>`;
      $("#writing-count").textContent = `${rows.length} of ${DATA.writings.length}`;
    }
    render();
    $("#writing-filter").addEventListener("input", e => render(e.target.value));
  }

  if (page === "presentations") {
    function render(filter=""){
      const f = filter.toLowerCase();
      const rows = DATA.presentations.filter(p =>
        !f || `${p.title} ${p.venue} ${p.year} ${p.month}`.toLowerCase().includes(f));
      $("#pres-list").innerHTML = rows.map(presCard).join("") ||
        `<p style="color:var(--text-dim)">No matches.</p>`;
      $("#pres-count").textContent = `${rows.length} of ${DATA.presentations.length}`;
    }
    render();
    $("#pres-filter").addEventListener("input", e => render(e.target.value));
  }

  if (page === "academics") {
    $("#academics-content").innerHTML = `
      <div class="item">
        <h3><span class="year">${DATA.teaching.years}</span>${DATA.teaching.role}</h3>
        <p class="meta">${DATA.teaching.place} · ${DATA.teaching.address}</p>
      </div>
      <h2 class="sub">Courses Taught</h2>
      ${DATA.teaching.courses.map(c=>`<div class="item"><h3>${c}</h3></div>`).join("")}`;
  }

  if (page === "cv") {
    $("#cv-content").innerHTML = DATA.cv.sections.map(sec=>`
      <h2 class="sub">${sec.heading}</h2>
      ${sec.entries.map(e=>`
        <div class="cv-entry">
          <h3>${e.role}</h3>
          <div class="role">${e.org}</div>
          ${e.when?`<div class="when">${e.when}</div>`:""}
          ${e.points&&e.points.length?`<ul>${e.points.map(p=>`<li>${p}</li>`).join("")}</ul>`:""}
        </div>`).join("")}`).join("");
  }

  if (page === "contact") {
    $("#contact-note").textContent = DATA.email.startsWith("you@")
      ? "⚠ Site owner: set your email in the DATA.email field (js/data.js)."
      : `Or email me directly: ${DATA.email}`;
    $("#contact-form").addEventListener("submit", e=>{
      e.preventDefault();
      if(DATA.email.startsWith("you@")){
        alert("Email address not configured yet — see the note below the form.");
        return;
      }
      const name = $("#cf-name").value.trim();
      const msg  = $("#cf-message").value;
      location.href = `mailto:${DATA.email}?subject=${encodeURIComponent("Website contact — "+name)}&body=${encodeURIComponent(msg)}`;
    });
  }
});