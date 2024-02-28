import React from 'react'
function Cartitem({CARTITEM, removeFromCart}) {
    return (
    
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">{CARTITEM.title}</div>
                {CARTITEM.currency}{CARTITEM.price}
            </div>
            <button onClick={ () => removeFromCart(CARTITEM)} className="badge bg-primary rounded-pill">X</button>
        </li>
    )
}
export default Cartitem;