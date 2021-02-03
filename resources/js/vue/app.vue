<template>
    <b-container>
        <b-col md="6" class="mx-auto mt-5">
            <b-card>
                <b-card-header>
                    <b-card-title class="text-center">Todo List</b-card-title>
                    <add-task-form />
                </b-card-header>

                <b-card-body>
                    <list-view />
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
    }
}
</script>