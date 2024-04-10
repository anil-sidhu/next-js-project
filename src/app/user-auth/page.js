'use client'
import CustomerHeader from "../_components/CustomerHeader"
import Footer from "../_components/Footer"
import UserSignUp from "../_components/UserSignUp"

const UserAuth=()=>{
    return(
        <div>
            <CustomerHeader />
            <div className="container">
            <h1>User</h1>
            <UserSignUp />
            </div>
            
            <Footer />
        </div>
    )
}

export default UserAuth