console.log('hola');

(async function() {
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const todoList = await todos.json();

  document.body.insertAdjacentText('beforeBegin', `${JSON.stringify(todoList)}`);

  console.log(todoList);
})();