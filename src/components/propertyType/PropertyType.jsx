import React from "react";
import { Link } from "react-router-dom";
import "./propertytype.css";

const PropertyType = () => {
  return (
    <div className="ptypeContainer">
      <h2 className="ptypeTitle">VACACIONES PERFECTAS</h2>
      <div className="cityImages">
        <div className="cityImage">
          <Link to="/">
            <div className="cityImg">
              <img src="./assets/images/cabins.jpg" alt="cabaña" />
            </div>
            <h4 className="cityImgTitle">Cabañas</h4>
            <span className="cityImgProperties">10 propiedades</span>
          </Link>
        </div>
        <div className="cityImage">
          <Link to="/">
            <div className="cityImg">
              <img src="./assets/images/minicasa.jpg" alt="Minicasa" />
            </div>
            <h4 className="cityImgTitle">Minicasas</h4>
            <span className="cityImgProperties">10 propiedades</span>
          </Link>
        </div>
        <div className="cityImage">
        <Link to="/">
          <div className="cityImg">
            <img src="./assets/images/aptos.jpg" alt="Apartamento" />
          </div>
          <h4 className="cityImgTitle">Apartamentos</h4>
          <span className="cityImgProperties">10 propiedades</span>
          </Link>
        </div>
        
        <div className="cityImage">
        <Link to="/">
          <div className="cityImg">
            <img src="./assets/images/Cupula.jpeg" alt="Cupula" />
          </div>
          <h4 className="cityImgTitle">Cupula</h4>
          <span className="cityImgProperties">10 propiedades</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PropertyType;
