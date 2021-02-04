<template>
    <b-container>
        <b-col md="6" class="mx-auto mt-5">
            <b-card>
                <b-card-header>
                    <b-card-title class="text-center">Todo List</b-card-title>
                    <add-task-form
                        v-on:reloadlist="getList()"
                    />
                </b-card-header>

                <b-card-body>
                    <list-view 
                        :tasks="tasks"
                        v-on:reloadlist="getList()"
                    />
                </b-card-body>
            </b-card>
        </b-col>
    </b-container>
</template>

<script>
import addTaskForm from './addTaskForm'
import listView from './listView'

export default {
    components: {
        addTaskForm,
        listView
    },
    data: function() {
        return {
            tasks: []
        }
    },
    methods: {
        getList() {
            axios.get('api/tasks')
            .then(response => {
                this.tasks = response.data
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    created() {
        this.getList();
    }
}
</script>