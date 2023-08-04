import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1"

//this is a asyn command and hence we know it will return promise and we need to handle it
axios.get(url).then(response => {
  console.log(response.data)
})