import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../../components/header/Header'
import PhotoAlbum from "react-photo-album";
import Footer from '../../components/footer/Footer';
import "./cabana.css"

const Cabana = ()=>{
    const photos = [
        {
            src: "../assets/images/cabi/cabi1.jpg",
            width: 800,
            height: 600
        },
        {
            src: "../assets/images/cabi/cabi2.jpg",
            width: 800,
            height: 600
        },
        {
            src: "../assets/images/cabi/cabi3.jpg",
            width: 800,
            height: 600
        },
        {
            src: "../assets/images/cabi/cabi4.jpg",
            width: 800,
            height: 600
        }

    ];
    return(
        <div>
            <Header type="smallHeader"/>
            <div className="hotelContainer">
                <div className="hotelRow">
                    <div className='hotelCol'>
                        <h2 className='hotelTitle'> Cabaña</h2>
                        <span><FontAwesomeIcon icon={faMapLocation}/> cabaña santaveronica, 34000km, Colombia </span>
                    </div>
                    <div className="hotelRow">
                    <button className="hotelBtn">RESERVAR</button>
                    </div>
                </div>
                <div className="hotelRow">
                <PhotoAlbum layout="rows" photos={photos} />

                </div>
                <div className="hotelRow">
                    <h3 className='hotelSubtitle' >Descripcion</h3>
                   < p className="hotelDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui aliquam maiores blanditiis 
                    accusamus praesentium, magnam ducimus sint in a, ullam quasi tenetur soluta numquam corrupti dolores!
                     Voluptatibus, aliquam labore.
                   </p>

                </div>
            </div>
            <Footer />
        </div>
    
    
    )
}
export default Cabana