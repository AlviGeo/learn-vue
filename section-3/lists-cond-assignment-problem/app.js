const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      tasks: [],
      listIsVisible: true,
    };
  },
  methods: {
    addValue() {
      if (this.enteredValue.trim() !== "") {
        this.tasks.push(this.enteredValue);
        this.enteredValue = "";
      }
    },
    toggleButton() {
      this.listIsVisible = !this.listIsVisible;
    },
  },
  computed: {
    toggleButtonText() {
      return this.listIsVisible ? "Hide List" : "Show List";
    },
  },
});

app.mount("#assignment");
