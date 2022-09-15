import { useContext } from "react";
import CartContext from "./context/CartContext";

const CheckOut = () => {
    const { items } = useContext(CartContext)
    return (
        <div>
            <h2>CheckOut</h2>
            <div>
                {items.map((item) => (
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CheckOut;