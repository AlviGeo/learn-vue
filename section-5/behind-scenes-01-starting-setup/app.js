const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  data() {
    return {
      message: "This is App 2",
      favoriteMeal: "Pizza",
    };
  },
});

app2.mount("#app2");

// Proxy Example - Adjusted to not overwrite too early
const data = {
  message: "Hello",
  longMessage: "Hello World!",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " World!";
    }
    target[key] = value; // generic assignment
  },
};

const proxy = new Proxy(data, handler);
proxy.message = "Hello!!!";

console.log(data);
