<template>
    <div class="card shadow border-dark">
        <div class="card-header text-white bg-dark">
            <h5 class="card-title">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                </svg> Task List
            </h5>
        </div>
        <div class="card-body">
            <table class="table table-bordered table-striped text-center" v-show="tasks.length>0">
                <thead class="text-white bg-dark">
                    <th>Task</th>
                    <th>Actions</th>
                </thead>
                <tbody v-for="t in tasks" :key="t.id">
                    <td v-if="t.status == 'done'">
                        <button class="btn btn-success">{{t.name}}</button>
                    </td>
                    <td v-if="t.status == 'pending'">
                        <button class="btn btn-warning">{{t.name}}</button>
                    </td>
                    <td v-if="t.status == 'urgent'">
                        <button class="btn btn-danger">{{t.name}}</button>
                    </td>
                    <td class="d-flex justify-content-around">
                        <button type="button" class="btn btn-info" @click="showTask(t.id)">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                <path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            </svg>
                        </button>
                        <button type="button" @click="deleteTask(t.id)" class="btn btn-danger">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                            </svg>
                        </button>
                    </td>

                </tbody>
            </table>
            <h5 class="text-center" v-if="tasks.length <= 0">No tasks yet</h5>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name: 'TaskList',
    data(){
        return({
            tasks: []
        })
    },
  created(){
    this.tasks = this.$store.getters.getTasks
  },
  methods:{
      showTask(id){
        const task = this.$store.getters.getTask(id)
        Swal.fire(
            task.name,
            task.description
        )        
      },
      deleteTask(id){
          this.$store.dispatch('deleteTask', id)
      }
  }
}
</script>