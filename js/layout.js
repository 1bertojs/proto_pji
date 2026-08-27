function layout(active) {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (header) {
    header.innerHTML = `
      <div class="nav-wrap">
        <a class="brand" href="index.html">
          <strong>MOD_ALT</strong>
          <span>moda das subculturas</span>
        </a>
        <nav class="nav-links" aria-label="Principal">
          <a href="index.html" class="${active === "home" ? "active" : ""}">Início</a>
          <a href="produtos.html" class="${active === "produtos" ? "active" : ""}">Produtos</a>
          <a href="diy.html" class="${active === "diy" ? "active" : ""}">Tutoriais DIY</a>
          <a href="vendedor.html" class="${active === "vendedor" ? "active" : ""}">Área do vendedor</a>
          <a href="carrinho.html" class="cart-link ${active === "carrinho" ? "active" : ""}">
            Carrinho <span id="cart-count">0</span>
          </a>
        </nav>
      </div>`;
  }
  if (footer) {
    footer.innerHTML = `
      <div class="wrap">
        <strong>MOD_ALT</strong> — arquivo comercial fictício de moda punk, gótica e emo.
        Compra, pagamento e entrega são simulados para este protótipo.
      </div>`;
  }
  updateCartCount();
}
