layout("vendedor");

function listMine() {
  const extra = JSON.parse(localStorage.getItem("modalt_products") || "[]");
  document.getElementById("mine").innerHTML = extra.length
    ? extra.map((p) => `<p><a href="produto.html?id=${p.id}">${p.name}</a><br><span class="meta">${cultureLabel(p.culture)} · ${money(p.price)}</span></p>`).join("")
    : '<p class="history">Nenhum produto cadastrado ainda.</p>';
}

listMine();
document.getElementById("seller-form").onsubmit = (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const product = {
    id: "s-" + Date.now(),
    name: data.name,
    culture: data.culture,
    category: data.category,
    price: Number(data.price),
    aesthetic: data.aesthetic,
    history: data.history,
    function: data.function
  };
  saveSellerProduct(product);
  e.target.reset();
  document.getElementById("seller-msg").innerHTML = '<span class="notice success">Peça publicada. Ela já aparece em Produtos.</span>';
  listMine();
};