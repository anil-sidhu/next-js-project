'use client'
import { useState } from "react";

const Page = () => {
    const [loginMobile, setLoginMobile] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');

    return (
        <div>
            <h1>Delivery Partner</h1>
            <div className="auth-container">
                
                <div className="login-wrapper">
                <h3>Login</h3>
                    <div className="input-wrapper">
                        <input type="text" placeholder="enter mobile" value={loginMobile} onChange={(event) => setLoginMobile(event.target.value)} className="input-field" />
                    </div>
                    <div className="input-wrapper">
                        <input type="password" placeholder="enter password" value={loginPassword} onChange={(event) => setLoginPassword(event.target.value)} className="input-field" />
                    </div>
                    <div className="input-wrapper">
                        <button className="button">Login</button>
                    </div>

                </div>
                <div className="signup-wrapper">
                <h3>Signup</h3>
                    <div className="input-wrapper">
                        <input type="text" className="input-field" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter name" />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" className="input-field" value={mobile} onChange={(event) => setMobile(event.target.value)} placeholder="Enter mobile" />
                    </div>

                    <div className="input-wrapper">
                        <input type="text" className="input-field" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password" />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" className="input-field" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirm password" />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" className="input-field" value={city} onChange={(event) => setCity(event.target.value)} placeholder="Enter city" />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" className="input-field" value={address} onChange={(event) => setAddress(event.target.value)} placeholder="Enter address" />
                    </div>

                    <div className="input-wrapper">
                        <button className="button">Signup</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;