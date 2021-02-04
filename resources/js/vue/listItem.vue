<template>
    <b-card-text>
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <input type="checkbox"
                @change="updateCheck()"
                v-model="task.completed"
            >
            <span :class="[task.completed ? 'completed' : '', 'ml-5']">{{ task.title }}</span>
            </div>
            <b-button @click="removeItem()" variant="danger">
                <fa-icon icon="trash" />
            </b-button>
        </div>
    </b-card-text>
</template>

<script>
export default {
    props: ['task'],
    methods: {
        updateCheck() {
            axios.put('api/task/update/' + this.task.id, {
                task: this.task
            })
            .then(response => {
                if(response.status == 200){
                    this.$emit('itemchanged');
                }
            })
            .catch(error => {
                console.log(error);
            })
        },
        removeItem() {
            axios.delete('api/task/delete/' + this.task.id)
            .then(response => {
                if(response.status == 200){
                    this.$emit('itemchanged')
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>

<style scoped>
.completed{
    text-decoration: line-through;
    color: #999;
}
</style>