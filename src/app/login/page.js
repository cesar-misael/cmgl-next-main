'use client'
import React from "react"
import { login } from "../../services/firebase/auth"
import "./login.css"

function Login() {

    const [state, setState] = React.useState({
        email: "",
        password: ""
    })

    function onChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        
        setState({
            ...state,
            [name]: value
        })
    }

    function onLogin() {
        const {email, password} = state;
        login(email, password)
    }

    return (
        <div className="container">
            <input onChange={onChange} name="email" type="text" value={state.email} />
            <input onChange={onChange} name="password" type="password" value={state.password} />
            <button onClick={onLogin}>Login</button>
        </div>
    )
}

export default Login;