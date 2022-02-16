<template>
  <div>
    <div class="container">
      <h1>Add New Task</h1>
    </div>
    <form id="form1" @submit="addtask" method="post">
      <h3>Enter Task :</h3>
      <input
        id="text1"
        type="text"
        placeholder="Enter task"
        name="task"
        v-model="post.TaskName"
      />

      <div>
        <h3>Priority :</h3>
        <input
          type="radio"
          name="radiobutton"
          value="high"
          class="radio"
          id="high"
          v-model="post.Priority"
        />high
        <input
          type="radio"
          name="radiobutton"
          value="medium"
          class="radio"
          id="medium"
          v-model="post.Priority"
        />medium
        <input
          type="radio"
          name="radiobutton"
          value="low"
          class="radio"
          id="low"
          v-model="post.Priority"
        />low
        <br />
      </div>

      <!-- <button type="submit" id="button1"> -->
      <router-link
        id="addlink"
        exact
        v-on:click.native.capture="addtask()"
        to="/"
        >Add Task
      </router-link>
      <!-- </button> -->
      <button id="button2">
        <router-link id="showlink" to="/">Showdata</router-link>
      </button>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);
export default {
  name: "addtask",
  data() {
    return {
      post: {
        TaskName: "",
        Priority: "",
        status: "undone",
      },
    };
  },
  methods: {
    addtask(e) {
      console.warn(this.post);
      this.axios
        .post("http://localhost:3000/posts", this.post)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error.result);
        });
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
h1 {
  background-color: beige;
  padding: 20px;
  margin-top: 30px;
}
#form1 {
  border: 1px solid white;
  box-shadow: -6px 9px 17px 1px rgba(24, 23, 23, 0.5);
  width: 600px;
  height: 400px;
  margin: auto;
}
#text1 {
  height: 30px;
  width: 400px;
  margin-top: 10px;
}
h3 {
  margin-top: 30px;
}
.radio {
  margin-left: 30px;
}
/* #button1 {
  margin-top: 40px;
  background-color: rgb(25, 21, 214);
  border: 1px solid rgb(51, 19, 196);
  color: white;
  border-radius: 5px;
  padding: 10px;
  height: 50px;
  width: 100px;
  font-size: 15px;
} */
#button2 {
  margin-top: 40px;
  background-color: rgb(218, 215, 63);
  border: 1px solid rgb(214, 212, 64);
  color: white;
  border-radius: 5px;
  padding: 10px;
  height: 50px;
  width: 100px;
  margin-left: 10px;
  font-size: 15px;
}
#showlink {
  text-decoration: none;
  color: white;
  font-size: 15px;
}
#addlink {
  text-decoration: none;

  font-size: 15px;
  background-color: rgb(25, 21, 214);
  border: 1px solid rgb(51, 19, 196);
  color: white;
  border-radius: 5px;
  padding: 15px;
  height: 100px;
  width: 100px;
}
</style>