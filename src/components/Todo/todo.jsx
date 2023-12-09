// import logo from "./logo.svg"
import "../Todo/todo.css"
import { useState } from "react"
import Button from "../Button/Button"
// ;<script src='./todo'></script>

function Todo() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [error, setError] = useState("")
  const [total, setTotal] = useState(0)

  // const handleRes = () => {
  //   setTodos("")
  // }
  const checkIfExist = (arr, element) => {
    return arr.some((el) => el.text === element)
  }
  const handleRemove = (str) => {
    const updatedTodos = todos.filter((t) => t.text !== str)
    setTodos(updatedTodos)
  }

  const handleChange = (e) => {
    setTodo(e.target.value)

    // alert(todo.filter((todos) => todo.includes(todo)))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todo.length < 3) {
      setError("please write more than two words")
      return
    } else {
      setError("")
    }

    if (checkIfExist(todos, todo)) {
      setError("bu task allaqachon mavjud")
      return
    }

    setTotal((prevTotal) => prevTotal + 1)

    setTodos([...todos, { id: todos.length + 1, text: todo }])
  }

  console.log(todos)

  return (
    <div className='containerMain d-flex  flex-column align-items-center'>
      <div className='w-50 d-flex justify-content-around'>
        {/* <button onClick={handleTodoReset}>reset </button> */}
        <form action='' className='w-100 d-flex justify-content-around'>
          {" "}
          <input
            className='input '
            type='text'
            placeholder='Enter task..'
            onChange={handleChange}
            value={todo}
          />
          <h1 className='total'>{total}</h1>
          <Button handleClick={handleSubmit} text='add todo' />
        </form>
      </div>
      {error ? <p className='error'>{error}</p> : null}

      <ol className='todos'>
        {todos.map((todo, index) => (
          <li key={index}>
            <p className='liEl'>
              {index + 1}. {todo.text}
              <button onClick={() => handleRemove(todo.text)}>remove</button>
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Todo
