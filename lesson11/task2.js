function getResponse(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
}

let promiseTodos = getResponse("https://jsonplaceholder.typicode.com/todos/1");
let promiseUsers = getResponse("https://jsonplaceholder.typicode.com/users/1");

let promiseCollectionAll = Promise.all([promiseTodos, promiseUsers]);
promiseCollectionAll.then(console.log);

Promise.race([promiseTodos, promiseUsers]).then(console.log);
