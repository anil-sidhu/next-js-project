import Link from 'next/link'
const RestaurantHeader=()=>{
    return(
        <div className='header-wrapper'>
            <div className="logo">
                <img style={{width:100}} src="https://s.tmimgcdn.com/scr/1200x627/242400/food-delivery-custom-design-logo-template_242462-original.png" />
            </div>
            <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/">Login/SignUp</Link>
            </li>
            <li>
                <Link href="/">Profile</Link>
            </li>
            </ul>
        </div>
    )
}

export default RestaurantHeader;