
const app = new Vue({
	el: '#app',
	data: {
		titlevue: 'Vue.JS ToDo List',
        newTodo: '',
        todos: [],
	},
	methods: {


		addTodo() {  
                    
            import api from './Api';

            var value = this.newTodo;


                     this.todos.push({  
                          
                        title: this.newTodo,  
                        completed: false,
                  
                     }) 

          
        
            this.newTodo = ''  
        }, 

        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },

        allCompleted() {
            this.todos.forEach(todo => {
            todo.completed = true;
            });
        }   
	}
	
});



