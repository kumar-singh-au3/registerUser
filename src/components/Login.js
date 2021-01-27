import React from 'react'
import './Login.css';

function Login({ name, number, email, changeName, changeNumber, changeEmail, register }) {
    return (
        <div className="login-box">
            <h2>Register</h2>
            <form>
                <div className="user-box">
                    <input type="text" value={name.trim()} onChange={(e) => changeName(e.target.value)} />
                    <label>First Name</label>
                </div>
                <div className="user-box">
                    <input type="number" value={number} onChange={(e) => changeNumber(e.target.value)} placeholder="10 digit number" />
                    <label>Number</label>
                </div>
                <div className="user-box">
                    <input type="text" value={email} onChange={(e) => changeEmail(e.target.value)} />
                    <label>Email</label>
                </div>
                <a href="#" onClick={(e)=>register(e)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
        Submit
      </a>
            </form>
        </div>
    );
}

export default Login;
