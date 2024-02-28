
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './Card';
import Cartitem from './Cartitem';
import { useState } from "react";



function App() {

  const products = [
    {
      id : 1,
      title: "iphone",
      currency: "Rs.",
      price: 1000000
    },
    {
      id : 2,
      title: "Oneplus",
      currency: "Rs.",
      price: 80000
    },
    {
      id : 3,
      title: "Vivo",
      currency: "Rs.",
      price: 60000
    },
    {
      id : 4,
      title: "Oppo",
      currency: "Rs.",
      price: 40000
    },
    {
      id : 5,
      title: "Realme",
      currency: "Rs.",
      price: 20000
    },
    {
      id : 6,
      title: "ipad",
      currency: "Rs.",
      price: 10000
    }
  ];

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  


  let addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price)
  };

  let removeFromCart = (item) => {
      //find which object to be removed
      let index = cart.findIndex((obj) => obj.id === item.id);
      cart.splice(index, 1);
      setCart([...cart])
      // Substract 
      setTotal(total - item.price);
  } 

  

return (
  <>
 
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="row">
          {
            products.map((item) => {
              return <Card item={item} cartitems={cart} handleAddToCart={addToCart}></Card>
            })
          }

        </div>
      </div>


      <div className="col-lg-4">
        {
          cart.length === 0 ? (<h1>No Item's in Cart </h1>) : (
            <div className="row">
              <ol class="list-group list-group-numbered">
                {
                  cart.map((CARTITEM) => {
                    return <Cartitem CARTITEM={CARTITEM} removeFromCart={removeFromCart} ></Cartitem>
                  })
                }
              </ol>
              <h3>Total: Rs {total}.</h3>
            </div>)
        }
      </div>

    </div>
  </div>

  </>
  );
}

export default App;