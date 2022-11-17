import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './tops.css'
import { Link } from 'react-router-dom';

const Tops = () => {
    return(
        <>
            <Carousel infiniteLoop={true} autoPlay={true} transitionTime={1500} interval={3000} showArrows={false} showIndicators={false}>
                <div className="cImage">
                    <Link to="/">
                        <img src="./assets/images/cabins.jpg" alt="cabins" />
                        <div className="cImgDesc">
                            <h2 className='cImgTitle'>Cabañas</h2>
                            <span className='cImgP'>Propiedades</span>
                        </div>
                    </Link>
                </div>
                <div className="cImage">
                    <Link to="/">
                        <img src="./assets/images/apartment.jpg" alt="apartamento" />
                        <div className="cImgDesc">
                            <h2 className='cImgTitle'>Apartamento</h2>
                            <span className='cImgP'>Propiedades</span>
                        </div>
                    </Link>
                </div>
                <div className="cImage">
                    <Link to="/">
                        <img src="./assets/images/glamping.jpg" alt="cupula" />
                        <div className="cImgDesc">
                            <h2 className='cImgTitle'>Cupulas</h2>
                            <span className='cImgP'>Propiedades</span>
                        </div>
                    </Link>
                </div>
                <div className="cImage">
                    <Link to="/">
                        <img src="./assets/images/minihouse.jpg" alt="minicasas" />
                        <div className="cImgDesc">
                            <h2 className='cImgTitle'>Minicasa</h2>
                            <span className='cImgP'>Propiedades</span>
                        </div>
                    </Link>
                </div>
            </Carousel>
        </>
    )
}
export default Tops