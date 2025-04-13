const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    number(value) {
      if (value === 37) {
        setTimeout(() => {
          this.number = 0;
        }, 5000);
      }
    },
  },
  computed: {
    counter() {
      if (this.number < 37) {
        return "Not there yet!" + " " + this.number;
      } else if (this.number > 37) {
        return "Too much!" + " " + this.number;
      }
      return this.number;
    },
  },
  methods: {
    add(num = 1) {
      this.number = this.number + num;
    },
  },
});

app.mount("#assignment");
