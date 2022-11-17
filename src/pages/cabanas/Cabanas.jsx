import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ListCabanas from '../../components/listCabanas/LisCabanas'
import Search from '../../components/search/Search'
import './cabanas.css'

const Cabanas = ()=>{
    return(
        <div>
            <Header type="smallHeader"/>
            <div className="cabanasContainer">
                <div className="cabanasRow">
                    <div className="cabanasCol">
                    <Search/>

                    </div>
                    <div className="cabanasCol">
                        <ListCabanas/>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    
    
    )
}
export default Cabanas