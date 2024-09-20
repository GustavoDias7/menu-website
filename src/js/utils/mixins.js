const mainMixin = {
  data() {
    return {
      modal: {
        menu: false,
      },
      accordion: {
        state: false,
        index: null,
      },
    };
  },
  methods: {
    openModal(name = "") {
      this.modal[name] = true;
    },
    closeModal(name = "") {
      this.modal[name] = false;
    },
    handleAccordion(index) {
      if (this.accordion.state == false) {
        this.accordion.state = true;
        this.accordion.index = index;
      } else if (
        this.accordion.state == true &&
        this.accordion.index == index
      ) {
        this.accordion.state = false;
        this.accordion.index = null;
      } else if (
        this.accordion.state == true &&
        this.accordion.index != index
      ) {
        this.accordion.index = index;
      }
    },
    active(data) {
      return { active: data !== "" };
    },
  },
};

module.exports = { mainMixin };
