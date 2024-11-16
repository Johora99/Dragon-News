import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import LoginForm from '../components/LoginForm'

export default function LoginPage() {
  useEffect(()=>{
    document.title ="Dragon || Login-Page"
  },[])
  return (
    <div className='h-screen'>
        <Nav></Nav>
        <LoginForm></LoginForm>
    </div>
  )
}
