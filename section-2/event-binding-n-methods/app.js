const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    sub() {
      this.counter--;
    },
    addNum(num) {
      this.counter = this.counter + num;
    },
    subNum(num) {
      this.counter = this.counter - num;
    },
    setName(e, name) {
      this.name = e.target.value + " " + name;
    },
    makeAlert() {
      alert("right button clicked");
    },
    setNewName(e) {
      this.confirmName = e.target.value;
    },
  },
});
app.mount("#interaction");
