const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "alvi",
          name: "Alvi Geovanny",
          phone: "01234 5678 991",
          email: "alvi@localhost.com",
        },
        {
          id: "zoey",
          name: "Zoey Baby",
          phone: "09876 543 221",
          email: "zoey@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "alvi",
        name: "Alvi Geovanny",
        phone: "01234 5678 991",
        email: "alvi@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
