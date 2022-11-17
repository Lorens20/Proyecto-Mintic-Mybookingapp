import React from 'react';
import './itemsc.css'

const ItemsC = () => {
    return (
        <div className='itemHotels'>
            <div className="itemHotelsCol">
                <img src ="./assets/images/cabi/cabana.jpg" alt="CabañaB"/>
            </div>
            <div className="itemHotelsCol">
                <div className='itemHotelDivs'>
                    <h2>Cabaña</h2>
            </div>
            <div className="itemHotelsDivs">
                <div className='itemHotelDiv'>
                    <span className='rating'>9.9</span>
                </div>
                <div className='itemHotelDiv'>
                    <span>Wonderful</span>
                    <span>510 reviews</span>
                </div>
            </div>
        </div>
        <div className='itemHotelsCol'>
            <div className="itemHotelsColDiv">
                <h2>$100.000</h2>
            </div>
            <div className="itemHotelsColDiv">
                <span>WI-FI</span>
                <span>Parqueadero</span>
            </div>            
           <div className="itemHotelsColDiv">
                <button>Detalles</button>
           </div>
        </div>
        
        </div>
        
    
    )
}
export default ItemsC