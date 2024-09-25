const path = require("path");

class Product {
  constructor(id, name, price, discount, img, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.total = this.price - this.price * this.discount;
    this.img = img;
    this.description = description;
    this.link = `https://wa.me/552199999999?text=${this.name}`;
    this.fprice = (this.price / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    this.fdiscount = `-${this.discount * 100}%`;
    this.ftotal = (this.total / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}

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
  products: [
    {
      code: "pizzas",
      title: "Pizzas",
      items: [
        new Product(
          0,
          "Margherita",
          7499,
          0.1,
          "../../img/pexels-renestrgar-18431672.jpg",
          "Uma verdadeira celebração da tradição italiana, a pizza Margherita combina molho de tomate fresco, mozzarella derretida e folhas de manjericão aromáticas. Simples, mas deliciosa, ela traz o sabor autêntico que encanta paladares ao redor do mundo."
        ),
        new Product(
          1,
          "Calabresa",
          8499,
          0.05,
          "../../img/pexels-muffin-1653877.jpg",
          "Uma verdadeira celebração da tradição italiana, a pizza Margherita combina molho de tomate fresco, mozzarella derretida e folhas de manjericão aromáticas. Simples, mas deliciosa, ela traz o sabor autêntico que encanta paladares ao redor do mundo."
        ),
        new Product(
          2,
          "Quatro Queijos",
          8999,
          0,
          "../../img/pexels-grizzlybear-1166120.jpg",
          "A pizza Quatro Queijos é um deleite para os amantes de queijo. Com uma combinação rica de mozzarella, gorgonzola, parmesão e provolone, cada pedaço é uma verdadeira festa de sabores e texturas. Ideal para quem aprecia uma experiência cremosa e saborosa, perfeita para compartilhar ou saborear sozinho!"
        ),
      ],
    },
    {
      code: "drinks",
      title: "Bebidas",
      items: [
        new Product(
          3,
          "Coca Cola 2L",
          499,
          0,
          "../../img/marcus-dietachmair-Ca3x5TayTEw-unsplash.jpg",
          "A Coca-Cola 2L é uma bebida icônica, perfeita para compartilhar em festas ou refeições. Embalada em uma garrafa plástica, oferece um sabor doce e borbulhante, com notas de caramelo e especiarias. É refrescante e ideal para saciar a sede, agradando a paladares de todas as idades. Uma escolha clássica e prática!"
        ),
        new Product(
          4,
          "Pepsi 2L",
          599,
          0,
          "../../img/pexels-gokcegok--9737410.jpg",
          "A Pepsi é uma bebida refrescante e saborosa, famosa por seu sabor colasaberoso e levemente cítrico. Embalada em uma garrafa plástica de 2 litros, é perfeita para compartilhar em festas, churrascos ou encontros familiares. Seu sabor inconfundível e efervescência garantem momentos de prazer para todas as idades."
        ),
        new Product(
          5,
          "Guaraná Antarctica 2L",
          399,
          0,
          "../../img/2l (1).png.webp",
          "O Guaraná Antarctica é uma bebida refrescante e deliciosa, famosa por seu sabor único e inconfundível. Feita com extrato de guaraná, ela oferece uma explosão de frescor e um leve toque adocicado. Ideal para acompanhar refeições, festas e encontros, essa garrafa de 2 litros é perfeita para compartilhar momentos especiais com amigos e família."
        ),
      ],
    },
  ],
  getProducts() {
    const p = this.ctx.products.reduce((accumulator, currentValue) => {
      accumulator = [...accumulator, ...currentValue.items];
      return accumulator;
    }, []);
    return JSON.stringify(p);
  },
};

module.exports = { context };
