const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  watch: {
    //watcher is a method which runs whenever value of data changes
    //can write function of data properties
    counter() {
      if (this.counter > 50) {
        this.counter = 0;
      }
    },
  },

  computed: {
    //they are like methods but vue are aware of their dependency and execute if one of its dependency change not like methods which run on change on every dependency either its other's dependency or not
    fullname() {
      if (this.name == "" || this.lastName == "") {
        return "";
      }
      return this.name + this.lastName;
    },
  },
  methods: {
    outputFullname() {
      console.log("hello method");
    },
    setName(event) {
      this.name = event.target.value;
    },
    setlastName(event) {
      this.lastName = event.target.value;
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
