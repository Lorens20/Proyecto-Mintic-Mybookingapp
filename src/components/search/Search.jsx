// import { faCalendar } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns'
import React from 'react';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import './search.css'

const Search = () => {
    const location = useLocation();
    const [destination, setDestination ] = useState(location.state.destination)
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState(location.state.date)
    // const [options, setOptions] = useState(location.state.options)
    return(
        <div className='searchCabanas'>
            <div className="search">
                <div className="searchItem">
                    <label>Destino</label>
                    <input placeholder={ destination } type="text"/>
                 </div>
                 <div className='searchItem'>
                    <label>Fecha</label>
                    <label onClick={() => setOpenDate(!openDate )}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</label>
                    {openDate && (<DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date}/>)}

                 </div>
                 <div className="searchItem">
                    <div className='searchOptions'>
                        <div className="searchOptionItem">
                            <label className="searchOptionsText">Min Precio <sub>Por noche</sub></label>
                            <input type="number" className="searchOptionsInput"/>
                        </div>
                        <div className="searchOptionItem">
                            <label className="searchOptionsText">Max Precio <sub>Por noche</sub></label>
                            <input type="number" className="searchOptionsInput"/>
                        </div>
                    </div>
                </div>
                <div className='searchItem'>
                    <button className='btnSearch'>Buscar</button>

                </div>
            </div>
        </div>
    )
}
export default Search