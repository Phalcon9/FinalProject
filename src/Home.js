import { useEffect, useState } from 'react';
import api from './api/post'
import ProductList from './products/productsList';
// import CartContext from './context/CartContext';
import Announce from './Announce';
import Slider from './slider/Slider';
import Footer from './footer/Footer';
import Products from './products/Products';




const Home = () => {

  // const {addToCart} = useContext(CartContext)

  const [products, setProducts] = useState([])

  //fetch data from json file
  useEffect( () => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('products')
        setProducts(response.data)
      }
      catch (err) {
        //not in the 200 response 
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
        else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchPosts()
  }, [])

  return (
    <div className=''>
      <Announce/>
      <Slider/>
      {/* <div className='hidden sm:block'>
        <img className='w-full h-[38rem] object-cover ' alt='ddd' src={bgImg}>
        </img>
      </div> */}

      <div className='flex justify-between items-center p-5'>
       {/* logical AND statement  */}
        {products
          && products.map((product, index) => (
            <ProductList
             //props for product to products list
              key={index}
              id={product.productId}
              name={product.productName}
              category={product.category}
              price={product.price}
              wear={product.Wear}
              image={product.image}
            />
          ))
        }
      </div>
      <Products/>
      <Footer/>
    </div>
  );
}

export default Home;