
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';

// import dummy data
// import { products } from '../../starting-code/data/products';

export function HomePage( {cart} ) {

  const [products, setProducts] = useState([]);

  /*
  fetch('http://localhost:3000/api/products')
    .then((response) => {
      // check reponse content
      // console.log(response)
      // response.json(): a promise that gives us the data attached to the response
      // which is also asynchronous as well as fetch()
      response.json().then((data) => {
        console.log(data)
      });
    

    // the second promise then() can be moved outside the first for better organization
    .then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
    });
  */

  // ALTERNATIVE approach: Axios (to work directly with response)
  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    };

    getHomeData();
  }, []);  // loads only once if it is empty inside brackets



  return (
    <>
      <title>Home Page</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}