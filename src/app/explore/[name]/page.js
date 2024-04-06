'use client'
import CustomerHeader from "@/app/_components/CustomerHeader"
import { useEffect, useState } from "react"

const Page = (props) => {
    const name = props.params.name;
    const [restaurantDetails, setRestaurantDetails] = useState();
    const [foodItems, setFoodItems] = useState([])

    useEffect(() => {
        loadRestaurantDetails()
    }, []);

    const loadRestaurantDetails = async () => {
        const id = props.searchParams.id;
        let response = await fetch("http://localhost:3000/api/customer/" + id)
        response = await response.json();
        if (response.success) {
            setRestaurantDetails(response.details)
            setFoodItems(response.foodItems)
        }

    }
    return (
        <div>
            <CustomerHeader />
            <div className="restaurant-page-banner">
                <h1>{decodeURI(name)}</h1>
            </div>
            <div>
                <h3>{restaurantDetails?.contact}</h3>
                <h3>{restaurantDetails?.city}</h3>
                <h3>{restaurantDetails?.address}</h3>
                <h3>{restaurantDetails?.email}</h3>
            </div>
            <div>
                {
                    foodItems.map((item) => (
                        <div>
                            <div>{item.name}</div>
                            <div>{item.price}</div>
                            <div>{item.description}</div>
                            <img style={{width:100}} src={item.img_path} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Page