import React from 'react'
import { Link } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import './city.css'

const City = () => {
    
    const {data, loading, error} = useFetch("api/cabins/bycity?cities=Barranquilla,Cartagena,Cali,Medellin");
    console.log(data);
    
  return (
    <div className='cities'>
        <h2 className="cityTitle" >EXPLORA  Y VIAJA</h2>
        <p className='cityDesc'></p>
        <div className="cityImages">
            {loading ? (<h2>Loading...</h2>) : ( 
                    <>
                        <div className="cityImage">
                            <Link to='/'>
                                <div className="cityImg">
                                    <img src ="./assets/images/Barranquilla.jpg" alt="Barranquilla"/>
                                </div>
                                <h4 className='cityImgTitle'>Barranquilla</h4>
                                <span className='cityImgProperties'>11 propiedades</span> {/* tengo que corregir para que se muestre los datos de la tabla */}
                            </Link>
                        </div>
                        <div className="cityImage">
                            <Link to='/'>
                                <div className="cityImg">
                                    <img src ="./assets/images/Medellin.jpg" alt="Medellin"/>
                                </div>
                                <h4 className='cityImgTitle'>Medellin</h4>
                                <span className='cityImgProperties'>propiedades</span>
                            </Link>
                        </div>
                        <div className="cityImage">
                            <Link to='/'>
                                <div className="cityImg">
                                    <img src ="./assets/images/Cartagena.jpg" alt="Cartagena"/>
                                </div>
                                <h4 className='cityImgTitle'>Cartagena</h4>
                                <span className='cityImgProperties'>11 propiedades</span>
                            </Link>
                        </div>
                        <div className="cityImage">
                            <Link to='/'>
                                <div className="cityImg">
                                    <img src ="./assets/images/Cali.jpg" alt="Cali"/>
                                </div>
                                <h4 className='cityImgTitle'>Cali</h4>
                                <span className='cityImgProperties'>11 propiedades</span>
                        </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    
    
    )
}
export default City