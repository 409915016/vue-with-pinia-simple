import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: 'buy some milk', isFav: false},
            {id: 2, title: 'play GloomHaven', isFav: true}
        ],
        name: 'Mather'
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        }
    }

})