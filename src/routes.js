import Home from "./components/Home.vue";
import addtask from "./components/addtask.vue";
import update from "./components/update.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/addtask", component: addtask },
  { path: "/update/:id", component: update },
];
export default routes;
