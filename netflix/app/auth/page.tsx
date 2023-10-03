"use client";
import Input from '@/components/input'
import React,{useCallback, useState} from 'react'
import { signIn } from 'next-auth/react';
import axios from 'axios'
const Auth = () => {
  const [email ,setEmail] = useState('')
  const [name ,setName] = useState('')
  const [password,setPassword] = useState('')
  const [varient,setVarient] = useState('login')
  const toggleVarient = useCallback(()=>{
    setVarient((currentVarient)=>currentVarient == 'login'? 'register':'login')
  },[])
  const register = useCallback(async ()=>{
    try {
      await axios.post('/api/register',{
        email,
        name,
        password
      })
    } catch (error) {
      console.log(error)
    }
  },[name,email,password])

  const login = useCallback(async ()=>{
    try {
      await signIn('credentials',{
        email,
        password,
        redirect:false,
        callbackUrl:'/'
      })
    } catch (error) {
      console.log(error)
    }
  },[email,password])
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
    <div className="bg-black h-full w-full lg:bg-opacity-50">
      <nav className='px-12 py-5'>
        <img src="/images/logo.png" alt="Logo"  className='h-12'/>
      </nav>
      <div className="flex justify-center"> 
    <div className="bg-black bg-opacity-70  px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
      <h2 className='text-white text-4xl font-semibold mb-8'>{varient == 'login' ? "Sign In" :"Register"}</h2>
      <div className="flex flex-col gap-4">
        {varient == 'register' && (
      <Input label='Username' onChange={(ev:any)=>setEmail(ev.target.value)} id='name'  value={email}/>)}
      <Input label='Email' onChange={(ev:any)=>setName(ev.target.value)} id='email' type='email' value={name}/>
      <Input label='Password' onChange={(ev:any)=>setPassword(ev.target.value)} id='password' type='password' value={password}/>
    </div>
    <button onClick={ varient == 'login'? login: register} className='bg-red-600 py-3 text-white rounded-md mt-6 w-full hover:bg-red-700 transition'>
      {varient == 'login'? 'Login':"Sign up"}
      </button>
      <p className='text-neutral-500 mt-6'>
       { varient == "login"?'First time using Netflix?':"Already have an account?"}
        <span className='text-white ml-1 hover:underline cursor-pointer' onClick={toggleVarient}>
          {varient =='login' ?'Create an account':"Login"}
        </span>
      </p>
    </div>
    
    </div>
    </div>
    
    </div>
  )
}

export default Auth