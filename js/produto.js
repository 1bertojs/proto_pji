layout("produtos");
const id = new URLSearchParams(location.search).get("id");
const product = getProducts().find((p) => p.id === id);
const root = document.getElementById("product-root");
if (!product) {
  root.innerHTML = '<div class="section"><div class="empty">Produto não encontrado. <a class="linkish" href="produtos.html">Voltar ao catálogo</a>.</div></div>';
} else {
  document.title = product.name + " — MOD_ALT";
  root.innerHTML = `
    <article class="product-page">
      <div class="thumb" style="height:420px;border:1px solid var(--line)">${thumbSvg(product)}</div>
      <div>
        <p class="kicker">${cultureLabel(product.culture)} · ${product.category}</p>
        <h1>${product.name}</h1>
        <p class="price">${money(product.price)}</p>
        <p class="lede">${product.aesthetic}</p>
        <div class="actions">
          <button class="btn" id="add">Adicionar ao carrinho</button>
          <a class="btn ghost" href="carrinho.html">Ir ao carrinho</a>
        </div>
        <div class="product-copy">
          <h2>História</h2>
          <p class="history">${product.history}</p>
          <h2>Função estética</h2>
          <p class="history">${product.function}</p>
        </div>
      </div>
    </article>`;
  document.getElementById("add").onclick = () => {
    addToCart(product.id);
    document.getElementById("add").textContent = "Adicionado";
    setTimeout(() => { document.getElementById("add").textContent = "Adicionar ao carrinho"; }, 1200);
  };
}