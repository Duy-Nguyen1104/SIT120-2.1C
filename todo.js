const app = Vue.createApp({
    data() {
      return {
        newTodo: '',
        todos: []
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim() !== '') {
          this.todos.push({ text: this.newTodo, completed: false });
          this.newTodo = '';
        }
      },
      deleteTodo(index) {
        this.todos.splice(index, 1);
      }
    },
    computed: {
        totalTasks() {
            return this.todos.length;
        },
        pendingTasks() {
            return this.todos.filter(todo => !todo.completed).length;
          }
    }
  });
  
  app.mount('#app');
  