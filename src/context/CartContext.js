import { createContext, useState } from "react";
//state management using context API
const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    const addToCart = (id, name, category, price, wear) => {
        setItems((prevState) => [...prevState, { id, name, category, price, wear }])
    } 

    return (
        <CartContext.Provider value={{ items, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;