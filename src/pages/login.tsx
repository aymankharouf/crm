import { useState, FormEvent } from 'react';
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

interface errorType {
  email?: string,
  password?: string
}
interface userType {
  name: string,
  email: string,
}
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<errorType>({})
  const history = useHistory()
  const handleSubmit = async (event: FormEvent) => {
    try {
      event.preventDefault()
      await axios.post('/auth/login', {email, password})
      history.push('/')
    }catch (err) {
      setErrors(err.response.data.errors)
    }
  }
  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (errors?.email) {
      let newErrors: errorType = {}
      Object.assign(newErrors, errors)
      delete newErrors.email
      setErrors(newErrors)
    }
  }
  const handlePasswordChange = (value: string) => {
    setPassword(value)
    if (errors?.email) {
      let newErrors: errorType = {}
      Object.assign(newErrors, errors)
      delete newErrors.password
      setErrors(newErrors)
    }
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
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            labelWidth={70}
            onChange={e => handlePasswordChange(e.target.value)}
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
          </FormControl>
          <Box my={2}>
            <Button
              color="primary"
              disabled={Boolean(!email || !password || Object.keys(errors).length > 0)}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Sign up now
            </Button>
          </Box>
          <Typography color="textSecondary">
            Haven't an account?{' '}
            <Link component={RouterLink} to="/register" variant="h6">
              Sign up
            </Link>
          </Typography>
        </form>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default Login;