const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  watch: {
    //watcher is a method which runs whenever value of data changes
    counter() {
      if (this.counter > 50) {
        this.counter = 0;
      }
    },
  },

  computed: {
    fullname() {
      if (this.name == "") {
        return "";
      }
      return this.name + " Neupane";
    },
  },
  methods: {
    outputFullname() {},
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetIn() {
      this.name = "";
    },
  },
});

app.mount("#events");
