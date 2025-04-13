function add() {
  counter++;
}

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num = 1) {
      this.counter = this.counter + num;
    },
    subtract(num = 1) {
      if (this.counter === 0) return alert("Number must not less than 0");
      this.counter = this.counter - num;
    },
    // addFive() {
    //   this.counter = this.counter + 5;
    // },
    // subtractFive() {
    //   if (this.counter === 0) return alert("Number must not less than 0");
    //   this.counter = this.counter - 5;
    // },
  },
});

app.mount("#events");
