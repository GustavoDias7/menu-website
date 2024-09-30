const path = require("path");
const { products } = require("./product");

const context = {
  static(filename) {
    return path.resolve("/", filename);
  },
  faq: [
    {
      id: 0,
      question: "Quais são os preços das pizzas?",
      response:
        "Nossas pizzas variam de R$ 30 a R$ 70, dependendo do tamanho e dos ingredientes escolhidos. Oferecemos opções individuais, médias e grandes para atender a diferentes apetite. Além disso, você pode conferir nosso cardápio online para ver todos os preços e escolher a sua favorita!",
    },
    {
      id: 1,
      question: "Vocês oferecem descontos ou promoções?",
      response:
        "Sim, temos promoções especiais durante a semana e descontos para pedidos em grupo! Fique de olho nas nossas redes sociais para ofertas exclusivas e cupons de desconto. Também temos um programa de fidelidade, onde você acumula pontos a cada compra que podem ser trocados por recompensas.",
    },
    {
      id: 2,
      question: "Qual é o tempo de entrega e a taxa de entrega?",
      response:
        "O tempo médio de entrega é de 30 a 45 minutos, dependendo da sua localização. A taxa de entrega varia conforme a distância, mas estamos sempre buscando manter os valores acessíveis. Oferecemos também entrega grátis em pedidos acima de R$ 100, para que você possa aproveitar ainda mais!",
    },
    {
      id: 3,
      question: "Quais formas de pagamento vocês aceitam?",
      response:
        "Aceitamos diversas formas de pagamento para sua conveniência! Você pode pagar em dinheiro, cartões de crédito e débito, além de opções de pagamento online como Pix e aplicativos de entrega. Garantimos uma transação segura para que você possa desfrutar da sua pizza sem preocupações!",
    },
    {
      id: 4,
      question: "Quais são os sabores mais populares?",
      response:
        "Nossos sabores mais populares incluem a clássica Margherita, Pepperoni, e a Pizza de Frango com Catupiry. Além disso, temos combinações exclusivas que mudam semanalmente! Não deixe de experimentar nossos sabores sazonais e pedir sugestões ao nosso time, sempre prontos para ajudar na escolha!",
    },
  ],
  products: products,
  getProducts() {
    const p = this.ctx.products.reduce((accumulator, currentValue) => {
      accumulator = [...accumulator, ...currentValue.items];
      return accumulator;
    }, []);
    return JSON.stringify(p);
  },
};

module.exports = { context };
