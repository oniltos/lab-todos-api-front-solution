import axios from 'axios'
import { useState, useEffect } from 'react'

const todosMock = [
    { _id: 123, title: 'Primeiro todo', completed: false },
    { _id: 124, title: 'Segundo todo', completed: true },
    { _id: 125, title: 'Terceiro todo', completed: false }
]

const TodosPage = () => {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const newTodo = { title: todo, completed: false }
        setTodos([...todos, newTodo])
        setTodo('')
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        const headers = {
            'Authorization': `Bearer ${token}`
        }

        axios.get(`${process.env.REACT_APP_API_URL}/todos`, { headers })
            .then(response => {
                setTodos(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1>Todos</h1>
            <div className="todo-form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={todo}
                        onChange={e => setTodo(e.target.value)}
                        placeholder="Digite aqui"
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
            <div className="todo-list">
                {todos.length > 0 && todos.map(todo => {
                    return (<div className="todo">
                        <input
                            type="checkbox"
                            name="todoCheck"
                            defaultChecked={todo.completed}
                        />
                        <span>{todo.title}</span>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default TodosPage