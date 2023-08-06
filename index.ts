import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1"


interface Todo {
  id: number
  title: string
  completed: boolean
}
//this is a asyn command and hence we know it will return promise and we need to handle it
axios.get(url).then(response => {
  //Telling TS that response.data is of type Todo, so we dont make the mistake of getting wrong parameters
  //like response.data.Title instead of response.data.title
  //TS will help throw the error while coding, better than getting the error during the compilation
  const {id, title, completed} = response.data as Todo
  logTodo(id, title, completed)
  
})

//abstracting the logging and adding types
//another application of TS where we might have 
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  Id: ${id} 
  Title: ${title}
  Completed: ${completed}`)

}