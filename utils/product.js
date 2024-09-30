class Product {
  constructor(props = {}) {
    const {
      id,
      code,
      name,
      price,
      discount,
      description,
      img,
      size,
      sizes,
      default_variant,
    } = props;

    this.id = id;
    this.code = code;
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.description = description;
    this.img = img;
    this.size = size;
    this.sizes = sizes;
    this.default_variant = default_variant;

    this.total = this.price - this.price * this.discount;

    this.fprice = this.fget_price();
    this.fdiscount = this.fget_discount();
    this.ftotal = this.fget_total();
    this.link = this.get_link();
  }

  fget_price() {
    return (this.price / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  fget_discount() {
    return `-${this.discount * 100}%`;
  }

  fget_total() {
    return (this.total / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  get_link() {
    const url = new URLSearchParams();
    url.set("id", this.id);
    if (this.size) url.set("size", this.size.id);
    return "/product?" + url.toString();
  }
}

const products = [
  {
    code: "pizza",
    title: "Pizzas",
    items: [
      new Product({
        id: 0,
        code: "pizza",
        name: "Margherita",
        price: 6499,
        discount: 0.1,
        description:
          "Uma verdadeira celebração da tradição italiana, a pizza Margherita combina molho de tomate fresco, mozzarella derretida e folhas de manjericão aromáticas. Simples, mas deliciosa, ela traz o sabor autêntico que encanta paladares ao redor do mundo.",
        img: "../../img/pexels-renestrgar-18431672.jpg",
        size: { id: 0, name: "Pequena", short_name: "P" },
        sizes: [
          { id: 0, name: "Pequena", short_name: "P", product_id: 0 },
          { id: 1, name: "Média", short_name: "M", product_id: 1 },
          { id: 2, name: "Maracanã", product_id: 2 },
        ],
        default_variant: false,
      }),
      new Product({
        id: 1,
        code: "pizza",
        name: "Margherita",
        price: 7499,
        discount: 0.1,
        description:
          "Uma verdadeira celebração da tradição italiana, a pizza Margherita combina molho de tomate fresco, mozzarella derretida e folhas de manjericão aromáticas. Simples, mas deliciosa, ela traz o sabor autêntico que encanta paladares ao redor do mundo.",
        img: "../../img/pexels-renestrgar-18431672.jpg",
        size: { id: 1, name: "Média", short_name: "M" },
        sizes: [
          { id: 0, name: "Pequena", short_name: "P", product_id: 0 },
          { id: 1, name: "Média", short_name: "M", product_id: 1 },
          { id: 2, name: "Maracanã", product_id: 2 },
        ],
        default_variant: true,
      }),
      new Product({
        id: 2,
        code: "pizza",
        name: "Margherita",
        price: 8499,
        discount: 0.1,
        description:
          "Uma verdadeira celebração da tradição italiana, a pizza Margherita combina molho de tomate fresco, mozzarella derretida e folhas de manjericão aromáticas. Simples, mas deliciosa, ela traz o sabor autêntico que encanta paladares ao redor do mundo.",
        img: "../../img/pexels-renestrgar-18431672.jpg",
        size: { id: 2, name: "Maracanã" },
        sizes: [
          { id: 0, name: "Pequena", short_name: "P", product_id: 0 },
          { id: 1, name: "Média", short_name: "M", product_id: 1 },
          { id: 2, name: "Maracanã", product_id: 2 },
        ],
        default_variant: false,
      }),
      new Product({
        id: 3,
        code: "pizza",
        name: "Calabresa",
        price: 7499,
        discount: 0.05,
        description:
          "Uma verdadeira celebração da tradição italiana, a pizza Margherita combina molho de tomate fresco, mozzarella derretida e folhas de manjericão aromáticas. Simples, mas deliciosa, ela traz o sabor autêntico que encanta paladares ao redor do mundo.",
        img: "../../img/pexels-muffin-1653877.jpg",
        size: { id: 3, name: "Pequena", short_name: "P" },
        sizes: [
          { id: 3, name: "Pequena", short_name: "P", product_id: 3 },
          { id: 4, name: "Média", short_name: "M", product_id: 4 },
          { id: 5, name: "Grande", short_name: "G", product_id: 5 },
        ],
        default_variant: false,
      }),
      new Product({
        id: 4,
        code: "pizza",
        name: "Calabresa",
        price: 8499,
        discount: 0.05,
        description:
          "Uma verdadeira celebração da tradição italiana, a pizza Margherita combina molho de tomate fresco, mozzarella derretida e folhas de manjericão aromáticas. Simples, mas deliciosa, ela traz o sabor autêntico que encanta paladares ao redor do mundo.",
        img: "../../img/pexels-muffin-1653877.jpg",
        size: { id: 4, name: "Média", short_name: "M" },
        sizes: [
          { id: 3, name: "Pequena", short_name: "P", product_id: 3 },
          { id: 4, name: "Média", short_name: "M", product_id: 4 },
          { id: 5, name: "Grande", short_name: "G", product_id: 5 },
        ],
        default_variant: true,
      }),
      new Product({
        id: 5,
        code: "pizza",
        name: "Calabresa",
        price: 9499,
        discount: 0.05,
        description:
          "Uma verdadeira celebração da tradição italiana, a pizza Margherita combina molho de tomate fresco, mozzarella derretida e folhas de manjericão aromáticas. Simples, mas deliciosa, ela traz o sabor autêntico que encanta paladares ao redor do mundo.",
        img: "../../img/pexels-muffin-1653877.jpg",
        size: { id: 5, name: "Grande", short_name: "G" },
        sizes: [
          { id: 3, name: "Pequena", short_name: "P", product_id: 3 },
          { id: 4, name: "Média", short_name: "M", product_id: 4 },
          { id: 5, name: "Grande", short_name: "G", product_id: 5 },
        ],
        default_variant: false,
      }),
      new Product({
        id: 6,
        code: "pizza",
        name: "Quatro Queijos",
        price: 8999,
        discount: 0,
        description:
          "A pizza Quatro Queijos é um deleite para os amantes de queijo. Com uma combinação rica de mozzarella, gorgonzola, parmesão e provolone, cada pedaço é uma verdadeira festa de sabores e texturas. Ideal para quem aprecia uma experiência cremosa e saborosa, perfeita para compartilhar ou saborear sozinho!",
        img: "../../img/pexels-grizzlybear-1166120.jpg",
        size: null,
        sizes: null,
        default_variant: false,
      }),
    ],
  },
  {
    code: "drinks",
    title: "Bebidas",
    items: [
      new Product({
        id: 7,
        code: "drinks",
        name: "Coca Cola",
        price: 499,
        discount: 0,
        description:
          "A Coca-Cola 2L é uma bebida icônica, perfeita para compartilhar em festas ou refeições. Embalada em uma garrafa plástica, oferece um sabor doce e borbulhante, com notas de caramelo e especiarias. É refrescante e ideal para saciar a sede, agradando a paladares de todas as idades. Uma escolha clássica e prática!",
        img: "../../img/marcus-dietachmair-Ca3x5TayTEw-unsplash.jpg",
        size: null,
        sizes: null,
        default_variant: false,
      }),
      new Product({
        id: 8,
        code: "drinks",
        name: "Pepsi",
        price: 399,
        discount: 0,
        description:
          "A Pepsi é uma bebida refrescante e saborosa, famosa por seu sabor colasaberoso e levemente cítrico. Embalada em uma garrafa plástica de 2 litros, é perfeita para compartilhar em festas, churrascos ou encontros familiares. Seu sabor inconfundível e efervescência garantem momentos de prazer para todas as idades.",
        img: "../../img/pexels-gokcegok--9737410.jpg",
        size: { id: 6, name: "1 Litro", short_name: "1L" },
        sizes: [
          { id: 6, name: "1 Litro", short_name: "1L", product_id: 8 },
          { id: 7, name: "2 Litros", short_name: "2L", product_id: 9 },
        ],
        default_variant: false,
      }),
      new Product({
        id: 9,
        code: "drinks",
        name: "Pepsi",
        price: 599,
        discount: 0,
        description:
          "A Pepsi é uma bebida refrescante e saborosa, famosa por seu sabor colasaberoso e levemente cítrico. Embalada em uma garrafa plástica de 2 litros, é perfeita para compartilhar em festas, churrascos ou encontros familiares. Seu sabor inconfundível e efervescência garantem momentos de prazer para todas as idades.",
        img: "../../img/pexels-gokcegok--9737410.jpg",
        size: { id: 7, name: "2 Litros", short_name: "2L" },
        sizes: [
          { id: 6, name: "1 Litro", short_name: "1L", product_id: 8 },
          { id: 7, name: "2 Litros", short_name: "2L", product_id: 9 },
        ],
        default_variant: true,
      }),
      new Product({
        id: 10,
        code: "drinks",
        name: "Guaraná Antarctica",
        price: 399,
        discount: 0,
        description:
          "O Guaraná Antarctica é uma bebida refrescante e deliciosa, famosa por seu sabor único e inconfundível. Feita com extrato de guaraná, ela oferece uma explosão de frescor e um leve toque adocicado. Ideal para acompanhar refeições, festas e encontros, essa garrafa de 2 litros é perfeita para compartilhar momentos especiais com amigos e família.",
        img: "../../img/2l (1).png.webp",
        size: { id: 8, name: "2 Litros", short_name: "2L" },
        sizes: [{ id: 8, name: "2 Litro", short_name: "2L", product_id: 10 }],
        default_variant: true,
      }),
    ],
  },
];

module.exports = { products };
