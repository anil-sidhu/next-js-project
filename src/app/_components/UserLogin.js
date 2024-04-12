import { useState } from "react"

const UserLogin=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const loginHandle=()=>{
        console.log(email,password);
    }
    return(
        <div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter email"value={email} onChange={(event)=>setEmail(event.target.value)} className="input-field" />
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="enter password" value={password} onChange={(event)=>setPassword(event.target.value)}  className="input-field" />
            </div>
            <div className="input-wrapper">
                <button onClick={loginHandle} className="button">Login</button>
            </div>

        </div>
    )
}

export default UserLogin