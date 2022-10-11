import React, { useState } from 'react'
import LayoutApp from '../shared/components/LayoutApp'
import LoginGoogle from '../shared/components/LoginGoogle'

export default function Auth() {

    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const loginComp = () => (
        <div>
            <h1>login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" onChange={handleChange} placeholder='email' />
                <br />
                <input type="password" name="password" onChange={handleChange} placeholder='password' />
                <br />
                <input type="submit" value='submit' />
            </form>
        </div>
    )
    const handleSubmit = (e) => {
        e.preventDefault()
        if (values.email === 'adityasykes@gmail.com' && values.password === 'kemal123') {
            localStorage.setItem('auth', true)
            localStorage.setItem('token', 'token_orderx')
            alert('success login')
            window.location.reload()
        } else {
            alert('failed login')
        }
    }
    return (

        <div className='auth'>
            {loginComp()}
            <LoginGoogle />
        </div >

    )
}
