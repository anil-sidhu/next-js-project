'use client'
import { useEffect, useState } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import Footer from "../_components/Footer";

const Page = ()=>{

    const [myOrders,setMyOrders]=useState([]);
    useEffect(()=>{
        getMyOrders()
    },[])

    const getMyOrders=async()=>{
        const userStorage= JSON.parse(localStorage.getItem('user'));
        let response = await fetch('http://localhost:3000/api/order?id='+userStorage._id)
         response = await response.json();
         if(response.success){
            setMyOrders(response.result)
         }
    }

    return(
        <div>
            <CustomerHeader />
            {
                myOrders.map((item)=>(<div className="restaurant-wrapper"
                style={{marginLeft:'auto',marginRight:'auto'}}>
                    <h4>Name {item.data.name}</h4>
                    <div>Amount:{item.amount}</div>
                    <div>Address:{item.data.address}</div>
                    <div>Status:{item.status}</div>
                  

                </div>))
            }
            <Footer />
        </div>
    )
}

export default Page;