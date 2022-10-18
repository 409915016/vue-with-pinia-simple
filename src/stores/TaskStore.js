import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        favCount() {
            return this.tasks.reduce((p, c) =>{
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount: (state) =>{
            return state.tasks.length
        }
    },
    actions: {
        async getTasks(){
            this.loading = true
            const res = await fetch('//localhost:3000/tasks')
            const data = await res.json()
            this.tasks = data
            this.loading = false
        },
        addTask(task) {
            this.tasks.push(task)
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })
        },
        toggleFav(id) {
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        }
    }

})