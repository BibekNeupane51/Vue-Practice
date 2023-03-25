const app = Vue.createApp({
  data() {
    return {
      myName: "Bibek Neupane",
      myAge: 25,
      imageLink:
        "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      inpVal: "Hello World",
    };
  },
  methods: {
    ageInc() {
      return this.myAge + 5;
    },
    randNum() {
      return Math.random();
    },
  },
});
app.mount("#user-section");
