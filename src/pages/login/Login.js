import styles from './Login.module.css'
import React from 'react'
import { useState } from 'react'
import {useLogin} from '../../hooks/useLogin.js'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password,setPassword]= useState('')
    const {login,error,isPending} = useLogin()
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        login(email,password)


    }

  return (
    <form   onSubmit={handleSubmit} className={styles['login-form']}>
        <h2>Login</h2>
        <label>
            <span>email:</span>
            <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email"/>

        </label>
        <label>
            <span>password:</span>
            <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password"/>
            
        </label>
        {!isPending && <button className='btn'> Login</button>}
        {isPending && <button className='btn' disabled>Loading</button>}
        {error && <p>{error}</p>}
        </form>
  )
}
