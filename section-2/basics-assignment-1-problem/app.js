const app = Vue.createApp({
  data() {
    return {
      name: "",
      age: 24,
      ageIn5Years: 0,
      favoriteNumber: "",
      imageLink: "https://picsum.photos/300",
    };
  },
  methods: {
    inputName(name) {
      if (name === null) return;
      return (this.name = name);
    },
  },
});

app.mount("#assignment");
