<template>
    <main>
        <header>
            <img src="./assets/pinia-logo.svg" alt="pinia logo">
            <h1>Pinia Tasks</h1>
        </header>

        <div class="task-list">
            <div v-for="task in taskStore.tasks">
                <TaskDetails :task="task"/>
            </div>
        </div>
    </main>
</template>

<script>
    import TaskDetails from './components/TaskDetails.vue'
    import { useTaskStore } from './stores/TaskStore';
    export default {
        components: { TaskDetails },
        setup(){
            const  taskStore = useTaskStore()
            return { taskStore }
        }
    }
</script>