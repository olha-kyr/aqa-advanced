async function fetchData(url) {
	let response = await fetch(url);
	return response.json();
}

let todo = await fetchData('https://jsonplaceholder.typicode.com/todos/1');
let user = await fetchData('https://jsonplaceholder.typicode.com/users/1');
console.log(todo);
console.log(user);
