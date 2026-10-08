layout("carrinho");

function lines() {
  const products = getProducts();
  return getCart().map((item) => {
    const product = products.find((p) => p.id === item.id);
    return product ? { ...item, product, total: product.price * item.qty } : null;
  }).filter(Boolean);
}

function render() {
  const items = lines();
  const root = document.getElementById("cart-root");
  if (!items.length) {
    root.innerHTML = '<div class="empty">Carrinho vazio. <a class="linkish" href="produtos.html">Escolher peças</a>.</div>';
    return;
  }
  const sum = items.reduce((s, i) => s + i.total, 0);
  root.innerHTML = `
    <div class="panel">
      <table class="cart-table">
        <thead><tr><th>Peça</th><th>Qtd</th><th>Total</th><th></th></tr></thead>
        <tbody>
          ${items.map((i) => `
            <tr>
              <td><a href="produto.html?id=${i.product.id}">${i.product.name}</a><br><span class="meta">${cultureLabel(i.product.culture)}</span></td>
              <td><input class="qty" type="number" min="1" value="${i.qty}" data-id="${i.id}"></td>
              <td>${money(i.total)}</td>
              <td><button class="linkish" data-remove="${i.id}">remover</button></td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>
    <aside class="panel">
      <h2>Resumo</h2>
      <p>Subtotal: <strong>${money(sum)}</strong></p>
      <p class="history">Frete e pagamento são simulados na próxima etapa.</p>
      <a class="btn" href="checkout.html">Finalizar compra</a>
    </aside>`;
  document.querySelectorAll(".qty").forEach((input) => {
    input.onchange = () => {
      updateQty(input.dataset.id, Number(input.value));
      render();
    };
  });
  document.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.onclick = () => {
      updateQty(btn.dataset.remove, 0);
      render();
    };
  });
}

render();