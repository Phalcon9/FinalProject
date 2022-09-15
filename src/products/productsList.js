import { useContext } from 'react';
// import cardImg from '../assets/2.jpg'
import CartContext from '../context/CartContext';
const ProductList = ({ id, name, category, price, wear, image }) => {

  const { addToCart } = useContext(CartContext)
  return (
    <div className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>
          <img src={image} alt="" className="w-[100%] "/>   
          <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
            <h2 className="text-white font-medium text-[30px] ">
              {name}
            </h2>
              <button className="btn">
                see more
              </button>
      </div>
    </div>
  );
}

export default ProductList;

