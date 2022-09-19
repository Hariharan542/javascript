import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
 import searchBar from './components/searchBar.vue'
Vue.config.productionTip = false
 Vue.component('SearchBar',searchBar)


 Vue.directive('comma',{
  componentUpdated:(e1,binding,vnode)=> {
    
    binding.value = binding.value.replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      vnode.context.field.departmentId=binding.value
    console.log(binding.value)
  }
 })

Vue.filter('place',function(a){
  if(a.length>10){
    return a.slice(0,10)+'...'
  }
  else
    return a
})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
