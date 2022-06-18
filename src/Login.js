import React from 'react'
import './Login.css'
import LoginComponent from './components/loginComponent.js'

function Login() {
    return (
        <div id='login-page'>
            <section id='main'>
                <h1>Sign Up</h1>
                <form action='/'>
                    <div className='inp'>
                        <label>Firstname:
                            <input type='text' name='name' />
                        </label>
                    </div>
                    <div className='inp'>
                        <label>Lastname:
                            <input type='text' name='name' />
                        </label>
                    </div>
                    <div className='inp'>
                        <label>E-Mail:
                            <input type='text' name='name' />
                        </label>
                    </div>
                    <div className='inp'>
                        <label>Password:
                            <input type='text' name='name' />
                        </label>
                    </div>
                    <div className='inp'>
                        <label>Confirm Password:
                            <input type='text' name='name' />
                        </label>
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>
            </section>
            <section id='secondary'>
                <LoginComponent />
            </section>
        </div>
    )
}

export default Login
