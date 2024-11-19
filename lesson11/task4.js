class Todo {
	constructor(url) {
		this.url = url;
	}

	async fetchData() {
		let response = await fetch(this.url);
		return response.json();
	}
}

class User extends Todo {
	constructor(url) {
		super(url);
	}
}

let todo = new Todo('https://jsonplaceholder.typicode.com/todos/1');
let todoData = await todo.fetchData();

let user = new User('https://jsonplaceholder.typicode.com/users/1');
let userData = await user.fetchData();

console.log(todoData);
console.log(userData);
