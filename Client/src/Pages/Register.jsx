import React from 'react'

export default function Register() {
  return (
    <div>
      <form>
        <label>Name</label>
        <input type='text' placeholder='your nickname' />
      </form>
      <form>
        <label>Email</label>
        <input type='email' placeholder='your email' />
      </form>
      <form>
        <label>Password</label>
        <input type='password' placeholder='your password' />
      </form>
      <form>
        <button>Submit</button>
      </form>
    </div>
  )
}
