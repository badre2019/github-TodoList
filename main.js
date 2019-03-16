

const app = new Vue({
	el: '#app',
	data: {
		title: 'Vue.JS ToDo List',
        newTodo: '',
        todos: [],
	},
	methods: {


		addTodo() {  
            var value = this.newTodo && this.newTodo.trim()  
            if (!value) {  
            return  
            }  
			import api from '../Api';
            api.createNew(value, false).then( (response) => {  

                this.$log.debug("New item created:", response); 

                     this.todos.push({  
                        id: response.data.id,  
                        title: value,  
                        completed: false,  
                     }) 

            }).catch((error) => {  
                 this.$log.debug(error);  
                 this.error = "Failed to add todo"  
                });  
        
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



