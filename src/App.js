import { useState } from "react"
import "./App.css"
import Todo from "./components/Todo/todo"
import Counter from "./components/Counter/Counter"
// import counter from "./components/counter"

// const todosList = [{ id: 1, text: "Do your homework" }]
function App() {
  return (
    <main className='container-wrapper'>
      <div className='container '>
        <Todo />
        <Counter />
      </div>
    </main>
  )
}

export default App
