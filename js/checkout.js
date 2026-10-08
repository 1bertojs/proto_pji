layout("carrinho");
const root = document.getElementById("checkout-root");
const products = getProducts();
const items = getCart().map((item) => {
  const product = products.find((p) => p.id === item.id);
  return product ? { ...item, product, total: product.price * item.qty } : null;
}).filter(Boolean);
const sum = items.reduce((s, i) => s + i.total, 0);

if (!items.length) {
  root.innerHTML = '<div class="empty">Nada para finalizar. <a class="linkish" href="produtos.html">Voltar aos produtos</a>.</div>';
} else {
  root.innerHTML = `
    <form class="panel" id="form">
      <h2>Entrega (simulada)</h2>
      <label>Nome</label>
      <input name="nome" required placeholder="Seu nome">
      <label>E-mail</label>
      <input name="email" type="email" required placeholder="voce@cena.local">
      <label>Endereço</label>
      <input name="endereco" required placeholder="Rua, número, cidade">
      <label>Pagamento fictício</label>
      <select name="pagamento" required>
        <option value="pix">PIX (simulado)</option>
        <option value="cartao">Cartão (simulado)</option>
        <option value="boleto">Boleto (simulado)</option>
      </select>
      <div class="actions">
        <button class="btn" type="submit">Confirmar pedido fictício</button>
      </div>
    </form>
    <aside class="panel">
      <h2>Pedido</h2>
      ${items.map((i) => `<p>${i.qty}× ${i.product.name}<br><span class="meta">${money(i.total)}</span></p>`).join("")}
      <p>Total: <strong>${money(sum)}</strong></p>
    </aside>`;
  document.getElementById("form").onsubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const code = "ALT-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    clearCart();
    root.innerHTML = `
      <div class="panel">
        <p class="notice success">Pedido ${code} registrado neste navegador. Nenhum pagamento real ocorreu.</p>
        <h2>Obrigado, ${data.nome}.</h2>
        <p class="history">Enviaríamos a confirmação para ${data.email} e despacharíamos para ${data.endereco} via ${data.pagamento} — se isto fosse uma loja de verdade.</p>
        <div class="actions">
          <a class="btn" href="../index.html">Voltar ao início</a>
          <a class="btn ghost" href="diy.html">Aprender um DIY</a>
        </div>
      </div>`;
  };
}