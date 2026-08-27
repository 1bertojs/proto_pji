const DEFAULT_PRODUCTS = [
  {
    id: "p-jaqueta-spikes",
    name: "Jaqueta de couro com spikes",
    culture: "punk",
    category: "couro",
    price: 489,
    aesthetic: "Armadura urbana. O couro protege e os spikes recusam o toque — um corpo que se recusa a ser dócil.",
    history:
      "Herdada das jaquetas de motoqueiros dos anos 1950 e radicalizada no punk londrino de 1976–77, a jaqueta de couro virou segunda pele da cena. Tachas e spikes não eram só enfeite: transformavam a peça em escudo contra agressão nas ruas e em palco. Cada patch, rasgo e pino de segurança conta uma história de banda, greve ou noite no underground.",
    function:
      "Esteticamente, o volume metálico quebra a silhueta comercial e cria uma aura de perigo controlado. Funcionalmente, o couro aguenta suor, chuva e o atrito do mosh pit; os spikes marcam território visual e desencorajam a intimidade indesejada."
  },
  {
    id: "p-tartan",
    name: "Painel de tartan rasgado",
    culture: "punk",
    category: "tecidos",
    price: 89,
    aesthetic: "Xadrez de clã reapropriado: o tecido da tradição vira bandeira de ruptura.",
    history:
      "O tartan, associado a clãs escoceses e uniformes, foi sequestrado por Malcolm McLaren e Vivienne Westwood na boutique SEX/Seditionaries. No punk, o xadrez deixou de significar linhagem e passou a significar colagem: recortes, alfinetes e contradições de classe costuradas à vista.",
    function:
      "Serve como retalho para customizar calças, kilts e jaquetas. O contraste entre padrão ‘nobre’ e o corte irregular produz o choque visual típico do punk: o belo e o destruído no mesmo plano."
  },
  {
    id: "p-pulseira-tacha",
    name: "Pulseira de tachas de três fileiras",
    culture: "punk",
    category: "acessorios",
    price: 64,
    aesthetic: "Joia de combate. O pulso vira linha de defesa e manifesto portátil.",
    history:
      "As pulseiras cravadas migraram de equipamentos de bondage e da estética de palco dos Sex Pistols e The Damned para o cotidiano da cena. No Brasil, circularam em camelôs, ateliês de fanzine e lojas de rua perto de casas de show — objeto barato, replicável e identificável a metros de distância.",
    function:
      "Marca afiliação sem precisar de logo de marca. O metal captura luz no escuro do porão e ritma o gesto ao bater palma ou segurar o microfone. Também é peça-base dos tutoriais DIY: couro, rebites e martelo."
  },
  {
    id: "p-camiseta-stencil",
    name: "Camiseta stencil ‘No Future’",
    culture: "punk",
    category: "tecidos",
    price: 79,
    aesthetic: "Tipografia de protesto impressa à mão — a camisa como cartaz ambulante.",
    history:
      "Antes das lojas oficiais, a camiseta punk nascia no quarto: stencil, tinta spray e uma frase roubada de jornal ou letra. ‘No Future’ ecoa God Save the Queen e a recusa do pacto social dos anos 1970. O DIY não era nicho: era o único meio de distribuição.",
    function:
      "Leve, barata e substituível, a peça privilegia a mensagem sobre o caimento. Manchas, falhas de tinta e costura torta são evidência de autoria, não defeito."
  },
  {
    id: "g-vestido-vitoriano",
    name: "Vestido preto de corte vitoriano",
    culture: "gotica",
    category: "tecidos",
    price: 420,
    aesthetic: "Luto como linguagem. O volume da saia e o decote alto teatralizam a ausência.",
    history:
      "A moda gótica dos anos 1980 (Batcave, Siouxsie, Bauhaus) reciclou o luto vitoriano, o romantismo e o cinema expressionista. Pretos densos, renda e corset não copiam o século XIX à risca: eles citam a morte, o sublime e o artifício num corpo contemporâneo.",
    function:
      "A silhueta alonga e dramatiza. Tecidos opacos absorvem luz — o contrário do brilho pop — e criam uma figura quase pictórica. Usar o vestido é encenar gravidade num mundo que exige leveza o tempo todo."
  },
  {
    id: "g-choker-veludo",
    name: "Choker de veludo e medalhão",
    culture: "gotica",
    category: "acessorios",
    price: 58,
    aesthetic: "O pescoço emoldurado: vulnerabilidade e poder no mesmo gesto.",
    history:
      "O choker atravessa o vitoriano, o fetish e o gótico dos 90. No veludo, evoca jóias de luto e fotografias de gabinete. O medalhão (cruz invertida, lua, cameo) funciona como amuleto laico — fé estética, não necessariamente religiosa.",
    function:
      "Fecha a composição do look sem competir com o vestido. A textura fosca do veludo contrasta com metal envelhecido e puxa o olhar para o rosto e a maquiagem."
  },
  {
    id: "g-anel-prata",
    name: "Anel de prata envelhecida com cruz",
    culture: "gotica",
    category: "acessorios",
    price: 96,
    aesthetic: "Relíquia falsa. O desgaste é maquiagem do tempo.",
    history:
      "Joalheria gótica toma emprestado simbolismo cristão, alquimia e art nouveau para construir uma mitologia pessoal. A prata oxidada imita herança familiar — como se o objeto tivesse sobrevivido a gerações de insônia e velas.",
    function:
      "Detalhe de close-up. Em fotos e no aperto de mão, o anel confirma o código. O peso no dedo altera o gesto, tornando-o mais lento, mais cerimonial."
  },
  {
    id: "g-bota-plataforma",
    name: "Bota plataforma de fivela",
    culture: "gotica",
    category: "couro",
    price: 359,
    aesthetic: "Monumento nos pés. Altura como distanciamento do chão comum.",
    history:
      "Plataformas vieram do glam, do goth industrial e das pistas dos 90. Marcas de cena e ateliês independentes exageraram fivelas até a bota virar arquitetura. Caminhar nela é performance: o ritmo muda, o corpo se endireita.",
    function:
      "Alonga a perna e pesa a base do look. Couro (ou similar) resiste a noites longas; as fivelas são tanto ajuste quanto ornamento barroco."
  },
  {
    id: "e-camisa-listra",
    name: "Camisa listrada preto e rosa choque",
    culture: "emo",
    category: "tecidos",
    price: 92,
    aesthetic: "Contraste adolescente: o rosa invade o luto sem pedi-lo desculpas.",
    history:
      "O emo de meados dos 2000 (My Chemical Romance, Dashboard, cenas de Warped Tour e orkut) misturou hardcore emocional com visual pop-punk. Listras pretas e cores saturadas (rosa, roxo, verde-limão) saíram de magazines e de customização caseira, virando uniforme de quem expunha demais o que sentia.",
    function:
      "A listra fragmenta o tronco e fotografa bem no flash do show. O rosa quebra o preto total e sinaliza vulnerabilidade estilizada — o oposto da dureza punk clássica."
  },
  {
    id: "e-skinny",
    name: "Calça skinny preta rasgada no joelho",
    culture: "emo",
    category: "tecidos",
    price: 149,
    aesthetic: "Perna como linha. O corpo estreito vira silhueta de HQ.",
    history:
      "Skinny jeans foram adotados por cenas emo, scene e post-hardcore como recusa da calça larga do nu-metal. O rasgo no joelho cita o desgaste real de pular no palco e, ao mesmo tempo, o corte deliberado feito no banheiro de casa com tesoura.",
    function:
      "Cola a perna na bota ou no all-star, alonga a figura e deixa à mostra meias listradas. O rasgo é janela: pele, tattoo ou patch viram detalhe narrativo."
  },
  {
    id: "e-cinto-rebite",
    name: "Cinto de rebites e argolas",
    culture: "emo",
    category: "acessorios",
    price: 72,
    aesthetic: "Ferragem sentimental. O metal pesa na cintura como um diário visível.",
    history:
      "Cintos de argola circularam entre emo, scene e mall-goth. Eram vendidos em lojas de shopping e também feitos com cintos pretos baratos e rebites de ferragem. A peça atravessava gêneros: tanto no palco quanto no recreio.",
    function:
      "Quebra o bloco preto da calça e da camisa. As argolas tilintam ao andar — trilha sonora mínima do look — e servem de suporte para correntes e chaveiros de banda."
  },
  {
    id: "e-clipe-cabelo",
    name: "Grampos e laço de cetim preto",
    culture: "emo",
    category: "acessorios",
    price: 28,
    aesthetic: "Franja como arquitetura. O rosto é encenado, não apenas penteado.",
    history:
      "A franja lateral cobrindo um olho virou o signo mais reconhecível do emo. Grampos, laços e clips coloridos vieram da cultura scene e de tutoriais de YouTube da época. Não era só cabelo: era controle da visibilidade — ver e ser visto pela metade.",
    function:
      "Segura a franja no ângulo certo e adiciona um ponto de brilho (cetim) na zona do olhar. Barato, íntimo e altamente comunicativo."
  }
];

const TUTORIALS = [
  {
    id: "diy-jaqueta",
    title: "Customizar jaqueta com patches e alfinetes",
    time: "2–4 horas",
    level: "iniciante",
    summary: "Transforme um couro ou jeans liso em arquivo vivo da sua cena.",
    steps: [
      "Escolha a base: jaqueta de couro sintético, jeans ou parka barata. Lave e seque para o tecido ‘assentar’.",
      "Reúna patches de bandas, recortes de tartan e alfinetes de segurança. O punk prefere colagem visível, não simetria de vitrine.",
      "Posicione sem costurar. Fotografe. O peito esquerdo e as costas são zonas de manifesto; as mangas, de detalhes.",
      "Costure com ponto visível em linha contrastante, ou prenda com alfinetes se quiser mudar toda semana.",
      "Opcional: adicione uma fileira de tachas no ombro. Marque com giz, fure com sovela e rebite sobre superfície rígida."
    ]
  },
  {
    id: "diy-pulseira",
    title: "Pulseira de tachas em couro",
    time: "45 minutos",
    level: "iniciante",
    summary: "O acessório-escola do DIY: rebites, martelo e pulso.",
    steps: [
      "Corte uma tira de couro (ou cinto velho) com 3–4 cm de largura e o contorno do seu pulso + 4 cm de sobreposição.",
      "Marque uma grade regular. Distância entre tachas de 8–12 mm evita que o couro rache.",
      "Fure por baixo, encaixe o rebite e bata o pino até fechar. Use um pano para não marcar o metal.",
      "Feche com botão de pressão ou fivela pequena. Teste o movimento do pulso antes de martelar a última fileira.",
      "Oxide de propósito: um pouco de vinagre no metal cria pátina de porão, não de loja nova."
    ]
  },
  {
    id: "diy-stencil",
    title: "Camiseta com stencil e tinta",
    time: "1 hora + secagem",
    level: "iniciante",
    summary: "Imprima uma frase como se fosse cartaz de parede.",
    steps: [
      "Desenhe a frase em papel cartão. Letras góticas, stencil militar ou recorte cru funcionam; evite fontes ‘bonitinhas’ demais se o recado for agressivo.",
      "Vaze o desenho com estilete sobre base rígida. Guarde os recortes internos das letras (o, a, e).",
      "Prenda o stencil na camiseta lisa com fita crepe. Coloque papelão dentro da peça para a tinta não vazar.",
      "Aplique tinta de tecido ou spray em camadas finas. Falhas leves são honestas; poças são arrependimento.",
      "Seque 24h e passe o ferro (com pano) para fixar. A primeira lavagem deve ser fria, do avesso."
    ]
  },
  {
    id: "diy-alfinete",
    title: "Joia de alfinete de segurança",
    time: "20 minutos",
    level: "iniciante",
    summary: "O objeto mais barato do punk vira corrente, brinco ou fechamento.",
    steps: [
      "Compre alfinetes grandes (os de fralda antigos ou de armarinho). Esterilize se forem tocar pele.",
      "Abra e encaixe em corrente, argola de cinto ou bainha de calça. A lógica é exposição: o fecho fica visível.",
      "Para brinco, passe o alfinete por um anel já existente e trave. Não force lóbulos sem furo.",
      "Combine com tecido rasgado: o alfinete não esconde o dano, ele oficializa o dano.",
      "Trate como ritual: cada alfinete pode marcar um show, uma amizade ou uma recusa."
    ]
  },
  {
    id: "diy-tingimento",
    title: "Tingir tecido de preto fundo de poço",
    time: "3 horas",
    level: "intermediário",
    summary: "O preto gótico e emo quase nunca nasce na loja: ele se conquista no tanque.",
    steps: [
      "Use peça de algodão ou viscose. Sintéticos puros pegam mal o corante.",
      "Ferva água, dissolva corante preto para tecido e sal (fixador caseiro). Siga a dosagem da embalagem.",
      "Mergulhe a peça úmida e mexa 30–40 min para o tom ficar uniforme — ou mexa pouco se quiser mancha ‘desgaste’.",
      "Enxágue até a água clarear. Lave separado nas primeiras vezes: o preto sangra como deve.",
      "Combine com rasgo e costura aparente. Tingir é só a base; a cultura acontece no corte."
    ]
  }
];

const KEYS = {
  products: "modalt_products",
  cart: "modalt_cart"
};

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getProducts() {
  const extra = read(KEYS.products, []);
  const map = new Map(DEFAULT_PRODUCTS.map((p) => [p.id, p]));
  extra.forEach((p) => map.set(p.id, p));
  return [...map.values()];
}

function saveSellerProduct(product) {
  const extra = read(KEYS.products, []);
  extra.push(product);
  write(KEYS.products, extra);
}

function getCart() {
  return read(KEYS.cart, []);
}

function setCart(items) {
  write(KEYS.cart, items);
  updateCartCount();
}

function addToCart(id, qty = 1) {
  const cart = getCart();
  const found = cart.find((i) => i.id === id);
  if (found) found.qty += qty;
  else cart.push({ id, qty });
  setCart(cart);
}

function updateQty(id, qty) {
  const cart = getCart().map((i) => (i.id === id ? { ...i, qty } : i)).filter((i) => i.qty > 0);
  setCart(cart);
}

function clearCart() {
  setCart([]);
}

function cartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function money(n) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function cultureLabel(c) {
  return { punk: "Punk", gotica: "Gótica", emo: "Emo" }[c] || c;
}

function updateCartCount() {
  const el = document.querySelectorAll("#cart-count");
  el.forEach((node) => {
    node.textContent = String(cartCount());
  });
}

function thumbSvg(product) {
  const palettes = {
    punk: ["#1a1410", "#c4a35a", "#a11f3a", "#efe6d8"],
    gotica: ["#120c16", "#6b5b8c", "#efe6d8", "#2a2030"],
    emo: ["#14080c", "#c45c7a", "#efe6d8", "#3a1520"]
  };
  const [bg, accent, light, deep] = palettes[product.culture] || palettes.punk;
  return `<svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="400" height="210" fill="${bg}"/>
    <polygon points="0,210 90,40 180,210" fill="${deep}"/>
    <polygon points="140,210 250,20 400,210" fill="${accent}" opacity="0.85"/>
    <rect x="40" y="28" width="70" height="8" fill="${light}"/>
    <circle cx="320" cy="48" r="18" fill="none" stroke="${light}" stroke-width="3"/>
    <text x="24" y="188" fill="${light}" font-size="13" font-family="Cinzel, serif">${cultureLabel(product.culture).toUpperCase()}</text>
  </svg>`;
}
