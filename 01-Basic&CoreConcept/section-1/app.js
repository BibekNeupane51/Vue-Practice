const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Learn Vue Basics",
      courseGoalA: "Learn Vue Basics",
      courseGoalB: "Master Vue Basics",
      courseGoalC: "<h2>Super Ultra<h2>",
      //we can add strings or objects or an array or number or boolean or anything
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    //methods is reserved keyword and takes object instead on function like data() above did
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue!";
      } else {
        return "Master Vue";
      }
    },
    outputGoal2() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA; //we can access stored data and method of global object through this keyword
        //data properties and method properties data which is returned are merged on global vue instance object: here it is merged on vue app object. It happens behind the scene
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
//js will look which part of html to add in vue. Here we add user-goal id as key to access and make it dynamic with vue
