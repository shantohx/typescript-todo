import React, {useState} from 'react';
import './App.css';

type Todo = {
  id: number
  done: boolean
  title: string
  description: string
}

function App() {
  const [title , setTitle] = useState('')
  const [description, setDescription] = useState('')

  // const x : Todo = {
  //   id: 0,
  //   done: false,
  //   title: '',
  //   description: ''
  // }

  let state : Todo[] = []
  let todoCounter: number = 1

  const setTodo = (title: string, description: string) => {
    const todo : Todo = {
      id : todoCounter,
      done: false,
      title,
      description
    }
    todoCounter =+1
    state.push(todo)
  }

  const getTodo = (id: number) => {
    state.map((todo) => {
      if(todo.id == id){
        return todo
      }
    })
  }
  
  setTodo("Task 1", "Make the Todo List Work")
  setTodo("Task 2", "Write Read.md file")
  setTodo("Task 3", "Build cool front end")

  const getAllTodo = () => {
    return state
  }

  const toggleTodo = (id: number) => {
    const todo = getTodo(id)
  }

  const handleChangeTitle = (s : string) => {
    setTitle(s)
  }

  const handleChangeDescription = (s : string) => {
    setDescription(s)
  }
  
  return (
    <div className="App">
      {/* <input type="text" id='title' placeholder='Title' onTextChange={(value : string) => handleChangeTitle(value)}/>
      <input type="text" name="description" id="description" placeholder='Description'/> */}
      
      <ul>
        {state.map((todo, key) => {
          return<li key={key}>{todo.title} <i>{todo.description}</i></li>
        })}
      </ul>
    </div>
  );
}

export default App;
