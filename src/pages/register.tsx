import { useState, useContext, FormEvent } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import { AppContext } from '../app'
import FormHelperText from '@material-ui/core/FormHelperText'

interface errorType {
  name?: string,
  email?: string,
  password?: string
}
interface userType {
  name: string,
  email: string,
}
const Register = () => {
  const { dispatch } = useContext(AppContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<errorType>({})
  const history = useHistory()
  const [waiting, setWaiting] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    try {
      event.preventDefault()
      setWaiting(true)
      const user = await axios.post('/auth/register', {name, email, password})
      dispatch({type: 'LOGIN', payload: user})
      setWaiting(false)
      history.push('/')
    }catch (err) {
      setErrors(err.response.data.errors)
    }
  }
  const handleNameChange = (value: string) => {
    setName(value)
    if (/\d/.test(value)) {
      errors.name = 'name must not contain numbers'
    } else if (value.length < 5) {
      errors.name = 'name must be more than 4 characters'
    } else {
      errors.name = undefined
    }
    setErrors(errors)
  }
  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (errors?.email) {
      setErrors({...errors, email: ''})
    }
  }
  const handlePasswordChange = (value: string) => {
    setPassword(value)
    if (value.length < 5) {
      errors.password = 'password must be more than 4 characters'
    } else {
      errors.password = undefined
    }
    setErrors(errors)
  }
  return (
    <Grid container>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <form onSubmit={handleSubmit}>
          <Box mb={3}>
            <Typography color="textPrimary" variant="h2">
              Sign up
            </Typography>
          </Box>
          <TextField
            error={Boolean(errors?.name)}
            fullWidth
            helperText={errors?.name}
            label="Name"
            margin="normal"
            name="name"
            onChange={e => handleNameChange(e.target.value)}
            type="text"
            value={name}
            variant="outlined"
          />
          <TextField
            error={Boolean(errors?.email)}
            fullWidth
            helperText={errors?.email}
            label="Email Address"
            margin="normal"
            name="email"
            onChange={e => handleEmailChange(e.target.value)}
            type="email"
            value={email}
            variant="outlined"
          />
          <FormControl fullWidth variant="outlined" style={{marginTop: '1em'}}>
            <InputLabel htmlFor="outlined-adornment-password" style={{ color: errors?.password && 'red'}}>Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              labelWidth={70}
              onChange={e => handlePasswordChange(e.target.value)}
              error={Boolean(errors?.password)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={e => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText id="filled-weight-helper-text" style={{color: 'red'}}>{errors?.password}</FormHelperText>
          </FormControl>
          <Box my={2}>
            <Button
              color="primary"
              disabled={Boolean(!name || !email || !password || (errors && Object.keys(errors).length > 0))}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Sign up now
            </Button>
          </Box>
          <Typography color="textSecondary">
            Have an account?{' '}
            <Link component={RouterLink} to="/login" variant="h6">
              Sign in
            </Link>
          </Typography>
        </form>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default Register;