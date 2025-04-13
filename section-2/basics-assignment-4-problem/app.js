const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      isVisible: true,
      bgColor: "",
    };
  },
  computed: {},
  methods: {
    toggleParagraph() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
