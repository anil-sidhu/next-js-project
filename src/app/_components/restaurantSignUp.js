import { useState } from "react"

const RestaurantSignUp=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [c_password,setC_password]=useState('');
    const [name,setName]=useState('');
    const [city,setcity]=useState('');
    const [address,setAddress]=useState('');
    const [contact,setContact]=useState('');

    const handleSignup=()=>{
        console.log(email,password,c_password,name,city,address,contact);
    }

    return(
        <>
       <h3> Signup </h3>
        <div>
           <div className="input-wrapper">
           <input type="text" placeholder="Enter email id" className="input-field" 
           value={email} onChange={(event)=>setEmail(event.target.value)}
            />
           </div>
           <div className="input-wrapper">
           <input type="password" placeholder="Enter password" className="input-field"
           value={password} onChange={(event)=>setPassword(event.target.value)}
            />
           </div>
           <div className="input-wrapper">
           <input type="password" placeholder="Confirm password" className="input-field"
           value={c_password} onChange={(event)=>setC_password(event.target.value)} />
           </div>
           <div className="input-wrapper">
           <input type="text" placeholder="Enter restaurant name" className="input-field" 
            value={name} onChange={(event)=>setName(event.target.value)}
            />
           </div>
           <div className="input-wrapper">
           <input type="text" placeholder="Enter city " className="input-field"
            value={city} onChange={(event)=>setcity(event.target.value)} />
           </div>
           <div className="input-wrapper">
           <input type="text" placeholder="Enter full address" className="input-field" 
            value={address} onChange={(event)=>setAddress(event.target.value)}/>
           </div>
           <div className="input-wrapper">
           <input type="text" placeholder="Enter contact No" className="input-field" 
            value={contact} onChange={(event)=>setContact(event.target.value)}/>
           </div>
           
           <div className="input-wrapper">
            <button className="button" onClick={handleSignup}>Sign up</button>
           </div>
        </div>
        </>
    )
}

export default RestaurantSignUp