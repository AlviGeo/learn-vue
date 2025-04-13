const app = Vue.createApp({
  data() {
    return {
      input: "",
      confirmedInput: "",
      secondInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("You clicked the button!");
    },
    setInput(e) {
      this.input = e.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.secondInput;
    },
  },
});

app.mount("#assignment");
