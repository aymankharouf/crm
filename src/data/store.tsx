import { createContext, useReducer, useEffect } from 'react'
import Reducer from './reducer'
import { iState, iContext } from './interfaces'
import axios from 'axios'
import { getToken } from './actions'
export const StoreContext = createContext({} as iContext)

const Store = (props: any) => {
  const initState: iState = {} 
  const [state, dispatch] = useReducer(Reducer, initState)

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = getToken()
        if (token) {
          axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
          const response = await axios.get('/auth/getUser')
          if (response.data) dispatch({type: 'LOGIN', payload: response.data})
        }
      } catch (err) {
        console.log(err)
      }
    }
    getUser()
  }, [])
  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {props.children}
    </StoreContext.Provider>
  )
}
 
export default Store

