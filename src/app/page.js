'use client'
import Image from "next/image";
import styles from "./page.module.css";
import CustomerHeader from "./_components/CustomerHeader";
import Footer from "./_components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showLocation, setShowLocation] = useState(false)

  useEffect(() => {
    loadLocations();
    loadRestaurants()
  }, [])

  const loadLocations = async () => {
    let response = await fetch('http://localhost:3000/api/customer/locations');
    response = await response.json()
    if (response.success) {
      setLocations(response.result)
    }
  }

  const loadRestaurants = async () => {
    let response = await fetch("http://localhost:3000/api/customer");
    response = await response.json()
    if (response.success) {
      setRestaurants(response.result)
    }
  }


  const handleListItem = (item) => {
    setSelectedLocation(item)
    setShowLocation(false)
  }
  console.log(restaurants);
  return (
    <main >
      <CustomerHeader />
      <div className="main-page-banner">
        <h1>Food Delivery App</h1>
        <div className="input-wrapper">
          <input type="text" value={selectedLocation}
            onClick={() => setShowLocation(true)}
            className="select-input" placeholder="Select Place" />
          <ul className="location-list">
            {
              showLocation && locations.map((item) => (
                <li onClick={() => handleListItem(item)}>{item}</li>
              ))
            }
          </ul>

          <input type="text" className="search-input" placeholder="Enter food or restaurant name" />
        </div>
      </div>
      <div className="restaurant-list-container">
        {
          restaurants.map((item) => (
            <div className="restaurant-wrapper">
              <div className="heading-wrapper">
                <h3>{item.name}</h3>
                <h5>Contact:{item.contact}</h5>
              </div>
              <div className="address-wrapper">
                <div>{item.city},</div>
                <div className="address"> {item.address}, Email: {item.email}</div>

                </div>
            </div>
          ))
        }
      </div>
      <Footer />
    </main>
  );
}
