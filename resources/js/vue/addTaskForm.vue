<template>
    <b-input-group class="mt-3">
        <b-form-input  v-model="task.title" placeholder="New task"></b-form-input>
        <b-input-group-append>
            <b-button :variant="task.title ? 'success' : 'secondary'" @click="addTask()">
                <fa-icon icon="plus" />
            </b-button>
        </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
    data(){
        return {
            task: {
                title: ""
            }
        }
    },
    methods:{
        addTask(){
            if(this.task.title == ""){
                return;
            }

            axios.post('api/task/add', {
                task: this.task
            })
            .then(response => {
                if(response.status == 200){
                    this.item.title = "";
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>