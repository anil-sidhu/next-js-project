
const RestaurantLogin=()=>{
    return(
        <>
       <h3> Login Component</h3>
        <div>
           <div className="input-wrapper">
           <input type="text" placeholder="Enter email id" className="input-field" />
           </div>
           <div className="input-wrapper">
           <input type="password" placeholder="Enter password" className="input-field" />
           </div>
           <div className="input-wrapper">
            <button className="button">Login</button>
           </div>
        </div>
        </>
    )
}

export default RestaurantLogin