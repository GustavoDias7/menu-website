const ShoppingCart = require("./ShoppingCart");

const mainMixin = {
  data() {
    return {
      modal: {
        menu: false,
        cart: false,
      },
      cart: new ShoppingCart(),
    };
  },
  methods: {
    openModal(name = "") {
      this.modal[name] = true;
    },
    closeModal(name = "") {
      this.modal[name] = false;
    },
    openCart() {
      this.cart.syncCart();
      this.openModal("cart");
    },
    closeCart() {
      this.closeModal("cart");
    },
    active(data) {
      return { active: data !== "" };
    },
  },
};

module.exports = { mainMixin };
