
const RestaurantSignUp=()=>{
    return(
        <>
       <h3> Signup </h3>
        <div>
           <div className="input-wrapper">
           <input type="text" placeholder="Enter email id" className="input-field" />
           </div>
           <div className="input-wrapper">
           <input type="password" placeholder="Enter password" className="input-field" />
           </div>
           <div className="input-wrapper">
           <input type="password" placeholder="Confirm password" className="input-field" />
           </div>
           <div className="input-wrapper">
           <input type="password" placeholder="Enter restaurant name" className="input-field" />
           </div>
           <div className="input-wrapper">
           <input type="password" placeholder="Enter city " className="input-field" />
           </div>
           <div className="input-wrapper">
           <input type="password" placeholder="Enter full address" className="input-field" />
           </div>
           <div className="input-wrapper">
           <input type="password" placeholder="Enter contact No." className="input-field" />
           </div>
           
           <div className="input-wrapper">
            <button className="button">Sign up</button>
           </div>
        </div>
        </>
    )
}

export default RestaurantSignUp