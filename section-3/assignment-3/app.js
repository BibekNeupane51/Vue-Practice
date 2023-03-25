const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },

  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.counter == 37) {
        return this.counter;
      } else if (this.counter > 37) {
        return "too high ";
      } else {
        return "too low ";
      }
    },
  },
  methods: {
    add(value) {
      this.counter = this.counter + value;
      console.log(this.counter);
    },
  },
});

app.mount("#events");
