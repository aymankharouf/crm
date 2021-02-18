import { createContext, useReducer, useEffect } from 'react'
import Reducer from './reducer'
import { iState, iContext } from './interfaces'

export const StoreContext = createContext({} as iContext)

const Store = (props: any) => {
  const initState: iState = {} 
  const [state, dispatch] = useReducer(Reducer, initState)

  useEffect(() => {
  }, [])
  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {props.children}
    </StoreContext.Provider>
  )
}
 
export default Store

