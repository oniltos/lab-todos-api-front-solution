import { useState } from 'react'
import axios from 'axios'

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        
        const newUser = {
            email,
            password
        }

        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, newUser)
            .then(response => {
                localStorage.setItem('token', response.data.jwt)
                setEmail('')
                setPassword('')
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='LoginPage'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="email">
                <label htmlFor="name">E-mail</label>
                    <input 
                        type="text"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="password">
                    <label htmlFor="name">Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage