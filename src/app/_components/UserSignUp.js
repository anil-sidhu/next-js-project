import { useState } from "react"

const UserSignUp=()=>{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [city,setCity]=useState('');
    const [address,setAddress]=useState('');
    const [mobile,setMobile]=useState('');

    const handleSignUp=()=>{
        console.log(name,email,password,confirmPassword,city,address,mobile);
    }

    return(
        <div>
            <div className="input-wrapper">
            <input type="text" className="input-field" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter name" />
            </div> 
            <div className="input-wrapper">
            <input type="text" className="input-field" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter email" />
            </div> 
            <div className="input-wrapper">
            <input type="text" className="input-field" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password" />
            </div> 
            <div className="input-wrapper">
            <input type="text" className="input-field" value={confirmPassword} onChange={(event)=>setConfirmPassword(event.target.value)} placeholder="Confirm password" />
            </div> 
            <div className="input-wrapper">
            <input type="text" className="input-field" value={city} onChange={(event)=>setCity(event.target.value)} placeholder="Enter city" />
            </div> 
            <div className="input-wrapper">
            <input type="text" className="input-field" value={address} onChange={(event)=>setAddress(event.target.value)} placeholder="Enter address" />
            </div> 
            <div className="input-wrapper">
            <input type="text" className="input-field" value={mobile} onChange={(event)=>setMobile(event.target.value)} placeholder="Enter mobile" />
            </div> 
            <div className="input-wrapper">
                <button onClick={handleSignUp} className="button">Signup</button>
            </div> 
        </div>
    )
}

export default UserSignUp