const FoodItemList=()=>{
    return(<div>
        <h1>Food Items</h1>
        <table>
            <thead>
                <tr>
                    <td>S.N</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Image</td>
                    <td>Operations</td>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>1</td>
                    <td>Pizza</td>
                    <td>300</td>
                    <td>Best seller pizza</td>
                    <td>Image</td>
                    <td><button>Delete</button><button>Edit</button></td>
                </tr>
                
            </tbody>
        </table>

    </div>)
}

export default FoodItemList;