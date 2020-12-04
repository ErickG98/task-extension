<template>
  <div class="card shadow border-dark">
    <div class="card-header bg-dark text-white">
      <h5 class="card-title">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>Adding Task
      </h5>
    </div>
    <div class="card-body">
      <form @submit="check">
        <div class="form-group">
          <label>Name:</label>
          <input type="text" ref="name" v-model="name" class="form-control">
        </div>
        <div class="form-group">
          <label>Description:</label>
          <input type="text" ref="description" v-model="description" class="form-control">
        </div>
        <div class="form-group">
          <label>Status:</label>
          <select class="form-control" ref="status" v-model="status">
            <option value="">Select a status</option>
            <option value="pending">Pendient</option>
            <option value="urgent">Urgent</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div class="form-group">
          <div class="aler alert-danger" v-show="errors.length > 0">
            <ul v-for="e in errors" :key="e.id">
              <li>{{e}}</li>
            </ul>
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success">Add</button>
          <button type="button" class="btn btn-danger ml-1" @click="$emit('adding-e'), reset()">Cancel</button>
        </div>
      </form>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'AddTask',
  data(){
    return({
      name: null,
      description: null,
      status: null,
      errors: []
    })
  },
  methods: {
    check(e){
      e.preventDefault()
      this.errors = []

      if(!this.name){
        this.errors.push('Name is required')
      }
      if(!this.description){
        this.errors.push('Description is required')
      }
      if(!this.status){
        this.errors.push('Status is required')
      }

      if(this.errors.length <= 0){
        this.addTask();
      }
    },
    addTask(){
      const task = {
        name: this.name,
        description: this.description,
        status: this.status,
        id: new Date().getSeconds() * 1000
      }
      this.$store.dispatch('addTask', task)
      this.reset()
      this.$emit('adding-e')
    },
    reset(){
      this.name = null
      this.description = null
      this.status = null

    }
  }
}
</script>