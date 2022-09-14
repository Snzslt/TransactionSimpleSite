import { createContext, useReducer,useEffect } from "react";
import { projectAuth } from "../firebase/config";



export const AuthContext = createContext()
export const authReducer = (state, action) => {
switch(action.type){
    case'LOGIN':
     return{...state, user:action.payload}
    case'LOGOUT':
      return{...state, user:null}
    case 'AUTH_IS_READY':
        return{...state, user: action.payload, authIsReady: true}
    default:
        return state
    }
}


 //Children represent what this component wrap in future
export const AuthContextProvider =({children}) =>{
    const[state, dispatch]= useReducer(authReducer,{
        user:null,
        authIsReady : false
    })


         //communicate with firebase if the user is logged in or not when we
        // reload the page and every time state is changed
    useEffect(()=>{
        const unsub = projectAuth.onAuthStateChanged((user)=>{
         dispatch({ type:'AUTH_IS_READY', payload:user })
         //never gonno fire again
         unsub()
        })
    },[])
    
    return(
        <AuthContext.Provider value={{...state, dispatch}}>
           
            {children}
        </AuthContext.Provider>
    )
}