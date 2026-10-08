layout("produtos");
const params = new URLSearchParams(location.search);
let current = params.get("cultura") || "todas";

function render() {
  const products = getProducts().filter((p) => current === "todas" || p.culture === current);
  document.getElementById("catalog").innerHTML = products.map((p) => `
    <article class="card">
      <a href="produto.html?id=${p.id}">
        <div class="thumb">${thumbSvg(p)}<span class="badge">${cultureLabel(p.culture)}</span></div>
        <div class="card-body">
          <p class="meta">${p.category}</p>
          <h3>${p.name}</h3>
          <p>${p.aesthetic}</p>
          <p class="price">${money(p.price)}</p>
        </div>
      </a>
    </article>
  `).join("") || '<div class="empty">Nenhum produto nesta cultura ainda.</div>';

  const chips = [
    ["todas", "Todas"],
    ["punk", "Punk"],
    ["gotica", "Gótica"],
    ["emo", "Emo"]
  ];
  document.getElementById("filters").innerHTML = chips.map(([id, label]) =>
    `<button class="chip ${current === id ? "active" : ""}" data-id="${id}">${label}</button>`
  ).join("");
  document.querySelectorAll(".chip").forEach((btn) => {
    btn.onclick = () => {
      current = btn.dataset.id;
      const url = new URL(location.href);
      if (current === "todas") url.searchParams.delete("cultura");
      else url.searchParams.set("cultura", current);
      history.replaceState({}, "", url);
      render();
    };
  });
}

render();