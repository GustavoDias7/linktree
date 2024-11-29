const mainMixin = {
  data() {
    return {
      modal: {
        menu: false,
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
    active(data) {
      return { active: data !== "" };
    },
  },
};

module.exports = { mainMixin };
