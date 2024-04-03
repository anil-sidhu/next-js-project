import Image from "next/image";
import styles from "./page.module.css";
import CustomerHeader from "./_components/CustomerHeader";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main >
      <CustomerHeader />
      <div className="main-page-banner">
      <h1>Food Delivery App</h1>
        <div className="input-wrapper">
          <input type="text" className="select-input" placeholder="Select Place" />
          <input type="text" className="search-input" placeholder="Enter food or restaurant name" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
