import React from 'react'

export default function Login() {
  return (
    <div>
      <form>
        <label>Email</label>
        <input type='email' placeholder='your email' />
      </form>
      <form>
        <label>Password</label>
        <input type='password' placeholder='your password' />
      </form>
    </div>
  )
}
