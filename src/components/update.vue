<template>
  <div>
    <div class="container">
      <h1>Update Task</h1>
    </div>
    <form id="form1" @submit="updatetask" method="put">
      <h3>Enter Task :</h3>
      <input
        id="text1"
        type="text"
        placeholder="Enter task"
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
      </div>
      <!-- 
      <button v-on:click="updatetask">Update Task</button> -->
      <router-link
        id="updatelink"
        exact
        v-on:click.native.capture="updatetask()"
        to="/"
        >UpdateTask
      </router-link>

      <button id="showdata">
        <router-link id="showlink2" to="/">Showdata</router-link>
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
  name: "update",
  data() {
    return {
      id: this.$route.params.id,
      post: {
        TaskName: " ",
        Priority: "",
      },
    };
  },
  created() {
    this.axios.get("http://localhost:3000/posts/" + this.id).then((result) => {
      console.log(result.data);
      this.post = result.data;
    });
  },
  methods: {
    updatetask(e) {
      this.axios
        .put("http://localhost:3000/posts/" + this.id, this.post)
        .then((result) => {
          console.log(result.data);
          this.post = result.data;
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
button {
  margin-top: 40px;
  background-color: rgb(67, 156, 26);
  border: 1px solid rgb(29, 167, 71);
  color: white;
  border-radius: 5px;
  padding: auto;
  height: 50px;
  width: 100px;
  font-size: 15px;
}
#showdata {
  margin-top: 40px;
  background-color: rgb(218, 215, 63);
  border: 1px solid rgb(214, 212, 64);
  color: white;
  border-radius: 5px;
  padding: auto;
  height: 50px;
  width: 100px;
  font-size: 15px;
  margin-left: 10px;
}
#showlink2 {
  text-decoration: none;
  color: white;
  font-size: 15px;
}
#updatelink {
  text-decoration: none;
  background-color: rgb(67, 156, 26);
  border: 1px solid rgb(29, 167, 71);
  color: white;
  border-radius: 5px;
  font-size: 15px;
  padding: 15px;
  height: 100px;
  width: 70px;
}
</style>