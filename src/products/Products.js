import { useEffect, useState } from "react";
import TopProducts from "./TopProducts";
import api from '../api/post'

const Products = () => {

    const [topProducts, setTopProducts] =useState([])

    useEffect( () => {
        const fetchPosts = async () => {
          try {
            const response = await api.get('topProducts')
            setTopProducts(response.data)
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
    <div className=" p-5 grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  items-center justify-center">
             {topProducts
          && topProducts.map((product, index) => (
            <TopProducts
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
     );
}
 
export default Products;