'use client'
import React from "react"
import { singup } from "../../services/firebase/auth"
import "./register.css"

function Register() {

    const [state, setState] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        displayName: "",
    })

    function onChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        
        setState({
            ...state,
            [name]: value
        })
    }

    function onRegister(event) {
        event.preventDefault();
        const {email, password, displayName, confirmPassword} = state;
        if (confirmPassword === password) {
            const sendable = {
                email,
                password,
                displayName
            }
            singup(sendable)
        } else {
            alert("Las contraseñas no coinciden")
        }
    }

    return (
        <div className="container">
            <form onSubmit={onRegister} style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <input required onChange={onChange} type="email" name="email" value={state.email} />
                <input required onChange={onChange} name="password" type="password" value={state.password} />
                <input required onChange={onChange} name="confirmPassword" type="password" value={state.confirmPassword} />
                <input required onChange={onChange} name="displayName" type="text" value={state.displayName} />
                <input type="submit" value="Registrarse" />
            </form>
        </div>
    )
}

export default Register;