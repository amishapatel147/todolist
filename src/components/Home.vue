<template>
  <div>
    <div id="div1">
      <h1>To-Do List Application</h1>
    </div>

    <table>
      <tr>
        <th colspan="2">TaskName</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Action</th>
      </tr>

      <tr id="tr1" v-for="item in tasks" :key="item.id">
        <td>
          <input
            type="checkbox"
            name="checkbox1"
            v-bind:value="item.status"
            v-model="item.status"
            v-on:change="
              changetask(item.id, item.TaskName, item.Priority, item.status)
            "
          />
        </td>
        <td>
          <label
            :class="{ selected: item.status == 'done' || item.status == true }"
            >{{ item.TaskName }}</label
          >
        </td>
        <td>{{ item.Priority }}</td>
        <td>{{ item.status | checked }}</td>

        <td>
          <button id="delete" v-on:click="deletetask(item.id)">Delete</button>
          <button id="update">
            <router-link
              id="link"
              v-on:bind="updatetask(item.id)"
              :to="'/update/' + item.id"
              >Update</router-link
            >
          </button>
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <button id="addtask">
            <router-link id="link" to="/addtask">AddNewTask </router-link>
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>




<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);
export default {
  name: "Home",
  data() {
    return {
      tasks: "",
      stutas: "undone",
      checked: false,
    };
  },
  beforeUpdate() {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].status == "undone") {
        this.tasks[i].status = false;
      }
    }
  },

  methods: {
    getuser() {
      Vue.axios.get("http://localhost:3000/posts").then((response) => {
        this.tasks = response.data;
        console.warn(response.data);
      });
    },
    deletetask(id) {
      this.axios
        .delete("http://localhost:3000/posts/" + id)
        .then((response) => {
          console.warn(response.data);

          this.getuser();
        });
    },
    changetask(iid, iTaskName, iPriority, istutas) {
      const utask = {
        TaskName: iTaskName,
        Priority: iPriority,
        status: istutas,
        id: iid,
      };

      this.axios
        .put("http://localhost:3000/posts/" + iid, utask)
        .then((result) => {
          console.log(result.data);
        })
        .catch((error) => {
          console.log(error.result);
        });
    },
  },

  mounted() {
    this.getuser();
  },
};
</script>

<style scoped>
h1 {
  padding: 10px 0px;

  text-align: center;
}
#div1 {
  width: 100%;
  background-color: beige;
  padding: 3px 3px;
}
table {
  margin: 50px auto;
  border: 1px solid black;
  width: 50%;
}
td {
  padding: 10px;
  font-size: 20px;
}
th {
  padding-left: 10px;
  font-size: 20px;
}

#delete {
  background-color: red;
  border: 1px solid red;
  color: white;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  font-size: 18px;
}
#update {
  background-color: green;
  border: 1px solid green;
  color: white;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  font-size: 18px;
}
#addtask {
  background-color: rgb(15, 68, 88);
  border: 1px solid rgb(12, 58, 77);
  color: white;
  border-radius: 5px;
  padding: 10px;
}
#link {
  text-decoration: none;
  color: white;
  font-size: 20px;
}
#taskname {
  text-decoration: line-through black;
}
.selected {
  text-decoration: line-through;
}
</style>