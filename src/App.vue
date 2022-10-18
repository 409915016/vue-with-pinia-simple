<template>
    <main>
        <header>
            <img src="./assets/pinia-logo.svg" alt="pinia logo">
            <h1>Pinia Tasks</h1>
        </header>

        <div class="new-task-form">
            <TaskFrom />
        </div>

        <nav class="filter">
            <button @click="filter = 'all'">All tasks</button>
            <button @click="filter = 'favs'">Fav tasks</button>
        </nav>

        <div class="loading" v-if="taskStore.loading">Loading tasks...</div>

        <div class="task-list" v-if="filter === 'all'">
            <p>You have {{ taskStore.totalCount }} tasks left to do</p>
            <div v-for="task in taskStore.tasks">
                <TaskDetails :task="task"/>
            </div>
        </div>

        <div class="task-list" v-if="filter === 'favs'">
            <p>You have {{ taskStore.favCount }} favs left to do</p>
            <div v-for="task in taskStore.favs">
                <TaskDetails :task="task"/>
            </div>
        </div>
    </main>
</template>

<script>
    import { ref } from 'vue'
    import TaskDetails from './components/TaskDetails.vue'
    import TaskFrom from './components/TaskFrom.vue'
    import { useTaskStore } from './stores/TaskStore';
    export default {
        components: { TaskDetails, TaskFrom },
        setup(){
            const taskStore = useTaskStore()
            taskStore.getTasks()
            const filter = ref('all')
            return { taskStore, filter }
        }
    }
</script>