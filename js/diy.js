layout("diy");
document.getElementById("tutorials").innerHTML = TUTORIALS.map((t, idx) => `
  <article class="tutorial" id="${t.id}">
    <div class="step-num">${String(idx + 1).padStart(2, "0")}</div>
    <div>
      <p class="meta">${t.level} · ${t.time}</p>
      <h2>${t.title}</h2>
      <p>${t.summary}</p>
      <ol class="history">
        ${t.steps.map((s) => `<li>${s}</li>`).join("")}
      </ol>
    </div>
  </article>
`).join("");