function layout(active) {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  const inPages = location.pathname.includes("/pages/");
  const rootPath = inPages ? "../" : "";
  const pagesPath = inPages ? "" : "pages/";
  if (header) {
    header.innerHTML = `
      <div class="nav-wrap">
        <a class="brand" href="${rootPath}index.html">
          <strong>MOD_ALT</strong>
          <span>moda das subculturas</span>
        </a>
        <nav class="nav-links" aria-label="Principal">
          <a href="${rootPath}index.html" class="${active === "home" ? "active" : ""}">Início</a>
          <a href="${pagesPath}produtos.html" class="${active === "produtos" ? "active" : ""}">Produtos</a>
          <a href="${pagesPath}diy.html" class="${active === "diy" ? "active" : ""}">Tutoriais DIY</a>
          <a href="${pagesPath}vendedor.html" class="${active === "vendedor" ? "active" : ""}">Área do vendedor</a>
          <a href="${pagesPath}carrinho.html" class="cart-link ${active === "carrinho" ? "active" : ""}">
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
