'use client'
import { useEffect } from "react";
import DeliveryHeader from "../DeliveryHeader";
import { useRouter } from "next/navigation";

const Page=()=>{

    const router = useRouter()

    useEffect(()=>{
        const delivery= JSON.parse(localStorage.getItem('delivery'));
        if(!delivery){
            router.push('/deliverypartner')
        }
    },[])
    return(
        <div>
        <DeliveryHeader />
            <h1>Delivery Dashboard</h1>
        </div>
    )
}

export default Page;