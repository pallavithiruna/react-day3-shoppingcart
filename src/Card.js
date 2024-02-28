import React from 'react'
import ReactStars from "react-rating-stars-component";



function Card({ item, cartitems, handleAddToCart }) {

    const ratingChanged = (rating) =>{
        alert(`You have given ${rating} Star rating for us.`)
    }


    return (
        <>

            <div className="col-lg-4 mb-2">
                <div class="card" style={{ width: "17rem" }}>
                    <img src={`https://picsum.photos/200/150?random=${Math.floor(Math.random() * 100)}`} class="card-img-top"  alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <div className='App'>
                            <ReactStars size={45} count={5} isHalf={true} onChange={ratingChanged}></ReactStars>
                        </div>
                        <p class="card-text">{item.currency}{item.price}</p>
                        <button disabled={cartitems.some((obj) => obj.id === item.id)} onClick={() => { handleAddToCart(item) }} class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}



export default Card;