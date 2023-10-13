// async promise
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// console.log("Hello");

// async function
/**
 * Fetches data from the specified URL.
 *
 * @return {Promise<Object[]>} An array of JSON objects containing todos.
 */
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
}

// get data
fetchData().then((data) => console.log(data));
