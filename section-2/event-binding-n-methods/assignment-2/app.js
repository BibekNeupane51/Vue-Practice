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
    setMyName(e) {
      this.name = e.target.value;
    },
    makeAlert() {
      alert("right button clicked");
    },
    setNewName(e) {
      this.confirmName = e.target.value;
    },
    myAlert() {
      alert("Hola por favor");
    },
  },
});
app.mount("#interaction");
