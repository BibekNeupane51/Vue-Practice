const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      paragraphVisible: true,
      inlineClass: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.paragraphVisible,
        hidden: !this.paragraphVisible,
      };
    },
  },
  methods: {
    toggleParagraph() {
      this.paragraphVisible = !this.paragraphVisible;
    },
  },
});
app.mount("#assignment");
