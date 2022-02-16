import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';

Vue.use(VueRouter)
const router = new VueRouter({
  routes
});
Vue.filter('checked',function(val){
  if(val== true){
    return "done"
  }
  if(val== false){
    return "undone"
  }
  if(val== "done"){
    return "done"
  }
  if(val== "undone"){
    return "undone"
  }
})


Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
