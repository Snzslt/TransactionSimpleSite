import styles from './Signup.module.css'
import React from 'react'
import { useState } from 'react'
import {useSignup} from '../../hooks/useSignup'


export default function Signup() {

  const [email, setEmail] = useState('')
  const [password,setPassword]= useState('')
  const [displayName, setDisplayName] = useState('')
  const {signup, isPending, error} = useSignup()


  const handleSubmit = (e) =>{
    e.preventDefault()
    signup(email,password,displayName)
  }
  return (
    <form   onSubmit={handleSubmit} className={styles['signup-form']}>
        <h2>Signup</h2>
        <label>
            <span>Email:</span>
            <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email"/>

        </label>
        <label>
            <span>Password:</span>
            <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password"/>
            
        </label>
        <label>
            <span>Display name:</span>
            <input onChange={(e)=> setDisplayName(e.target.value)} value={displayName} type="displayName"/>
            
        </label>
        {!isPending && <button className="btn">Signup</button>}
        {isPending && <button className="btn" disabled>Loading</button>}
        {error && <p className='error'>{error}</p>}
        </form>
  )
}
