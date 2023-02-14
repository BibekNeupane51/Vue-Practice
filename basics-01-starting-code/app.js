const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Learn Vue Basics", //we can add strings or objects or an array or number or boolean or anything
      vueLink: "https://vuejs.org/",
    };
  },
});

app.mount("#user-goal");
//js will look which part of html to add in vue. Here we add user-goal id as key to access and make it dynamic with vue
