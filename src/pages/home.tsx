import { useState, FormEvent } from 'react';
import axios from 'axios'

const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  const handleSubmit = async (event: FormEvent) => {
    try {
      event.preventDefault()
      await axios.post('http://localhost:5000/api/auth/login', {email, password})
    }catch (err) {
      setErrors(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <div style={{display: 'flex', flexDirection: 'column', margin: 'auto', maxWidth: '300px'}}>
        <label htmlFor="email">email</label>
        <input type="email" name="email" role="email" value={email} onChange={e => setEmail(e.target.value)}></input>
        {errors && <span>Error</span>}
        <label htmlFor="password">password</label>
        <input type="password" name="password" role="password" value={password} onChange={e => setPassword(e.target.value)}></input>
        {errors && <span>Errors</span>}
        <button type="submit" role="button" disabled={!email && !password}>login</button>
    </div>
    </form>
  )
}

export default Home