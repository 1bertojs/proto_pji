layout("home");
const featured = getProducts().slice(0, 6);
document.getElementById("featured").innerHTML = featured.map((p) => `
  <article class="card">
    <a href="pages/produto.html?id=${p.id}">
      <div class="thumb">${thumbSvg(p)}<span class="badge">${cultureLabel(p.culture)}</span></div>
      <div class="card-body">
        <p class="meta">${p.category}</p>
        <h3>${p.name}</h3>
        <p>${p.aesthetic}</p>
        <p class="price">${money(p.price)}</p>
      </div>
    </a>
  </article>
`).join("");