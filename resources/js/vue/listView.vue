<template>
    <b-card-body>
        <div v-for="(task, index) in tasks" :key="index">
            <list-item :task = "task" v-on:itemchanged="$emit('reloadlist')" />
        </div>
    </b-card-body>
</template>

<script>
import listItem from './listItem'
export default {
    props: ['tasks'],
    components: {
        listItem
    }
}
</script>