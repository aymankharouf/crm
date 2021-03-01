import { useState, FormEvent } from 'react';
import axios from 'axios'

interface errorType {
  email?: string,
  password?: string
}
const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<errorType>({})
  const handleSubmit = async (event: FormEvent) => {
    try {
      event.preventDefault()
      await axios.post('/auth/login', {email, password})
    }catch (err) {
      setErrors(err.response?.data.errors)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <div style={{display: 'flex', flexDirection: 'column', margin: 'auto', maxWidth: '300px'}}>
        <label htmlFor="email">email</label>
        <input type="email" name="email" role="email" value={email} onChange={e => setEmail(e.target.value)}></input>
        {errors?.email && <span>Error</span>}
        <label htmlFor="password">password</label>
        <input type="password" name="password" role="password" value={password} onChange={e => setPassword(e.target.value)}></input>
        {errors?.password && <span>Error</span>}
        <button type="submit" role="button" disabled={!email && !password}>login</button>
    </div>
    </form>
  )
}

export default Home