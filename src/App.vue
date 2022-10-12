<template>
    <main>
        <header>
            <img src="./assets/pinia-logo.svg" alt="pinia logo">
            <h1>Pinia Tasks</h1>
        </header>

        <nav class="filter">
            <button @click="filter = 'all'">All tasks</button>
            <button @click="filter = 'favs'">Fav tasks</button>
        </nav>

        <div class="task-list" v-if="filter === 'all'">
            <p>all tasks</p>
            <div v-for="task in taskStore.tasks">
                <TaskDetails :task="task"/>
            </div>
        </div>

        <div class="task-list" v-if="filter === 'favs'">
            <p>fav tasks</p>
            <div v-for="task in taskStore.favs">
                <TaskDetails :task="task"/>
            </div>
        </div>
    </main>
</template>

<script>
    import { ref } from 'vue'
    import TaskDetails from './components/TaskDetails.vue'
    import { useTaskStore } from './stores/TaskStore';
    export default {
        components: { TaskDetails },
        setup(){
            const taskStore = useTaskStore()
            const filter = ref('all')
            return { taskStore, filter }
        }
    }
</script>