import { useState } from 'react'
import axios from 'axios'

const SignUpPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        
        const newUser = {
            name,
            email,
            password
        }

        axios.post(`${process.env.REACT_APP_API_URL}/auth/sign-up`, newUser)
            .then(response => {
                if(response.status === 201) {
                    setName('')
                    setEmail('')
                    setPassword('')
                    alert('User created')
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='SignUpPage'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                </div>
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
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}

export default SignUpPage