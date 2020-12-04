import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    ADD_TASK(state, task){
      state.tasks.push(task)
    },
    DELETE_TASK(state, id){
      state.tasks.forEach((t, i) => {
        if(t.id == id){
          state.tasks.splice(i, 1)
        }
      })
    }
  },
  actions: {
    addTask(context, task){
      context.commit('ADD_TASK', task)
    },
    deleteTask(context, id){
      context.commit('DELETE_TASK', id)
    }
  },
  modules: {
  },
  getters: {
    getTasks(state){
      return state.tasks
    },
    getTask: (state) => (id) => {
      return state.tasks.find(task => task.id === id)
    }
  }
})
