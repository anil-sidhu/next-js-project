'use client'
import { useState } from "react"
import CustomerHeader from "../_components/CustomerHeader"
import Footer from "../_components/Footer"
import { DELIVERY_CHARGES, TAX } from "../lib/constant"



const Page = () => {

    const [userStorage,setUserStorage]=useState(JSON.parse(localStorage.getItem('user')));
    const [cartStorage, setCartStorage] = useState(JSON.parse(localStorage.getItem('cart')))
    const [total]=useState(()=>cartStorage.length==1?cartStorage[0].price:cartStorage.reduce((a,b)=>{
return a.price+b.price
    }))
    console.log(total);
    return (
        <div>
            <CustomerHeader />
            <div className="total-wrapper">
               <div className="block-1">
                <h2>User Details</h2>
               <div className="row">
                    <span>Name </span>
                    <span>{userStorage.name}</span>
                </div>
                <div className="row">
                    <span>address </span>
                    <span>{userStorage.address}</span>
                </div>
                <div className="row">
                    <span>Mobile </span>
                    <span>{userStorage.mobile}</span>
                </div>
                <h2>Amount Details</h2>
                <div className="row">
                    <span>Tax : </span>
                    <span>{total*TAX/100}</span>
                </div>
                <div className="row">
                    <span>Delivery Charges  : </span>
                    <span>{DELIVERY_CHARGES}</span>
                </div>
                <div className="row">
                    <span>Total Amount : </span>
                    <span>{total+DELIVERY_CHARGES+(total*TAX/100)}</span>
                </div>
                <h2>Payment Methods</h2>
                <div className="row">
                    <span>Cash on Delivery : </span>
                    <span>{total+DELIVERY_CHARGES+(total*TAX/100)}</span>
                </div>
                
               </div>
               <div className="block-2">
                    <button>Place your Order Now</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Page