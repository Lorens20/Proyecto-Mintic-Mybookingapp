import { faBuilding, faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { Link, useNavigate } from 'react-router-dom'
import './header.css'
import { faCampground, faHouseChimney, faMagnifyingGlass, faTent } from '@fortawesome/free-solid-svg-icons';


const Header = ({type})=>{
    const [destination, setDestination] = useState("")
    const[openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const navigate = useNavigate();
    //   const handleOption = (name, operation) => {
    //     setOptions((prev) => {
    //         return{
    //             ...prev,
    //             [name]: operation === 'increment' ? options[name] + 1 : options[name] -1,
    //         }
            
    //     })
    //   } creoq que este codigo es para la opcion de familiat
      
        const handleSearch = () => {
            navigate("/cabanas", { state: { destination, date } });
            // options esta opcion va despues de date, pero no la e puesto por que creo que es la opcion para ver la cantidad de persona
        }
    return(
        <div className='h-container'>
            <div className="h-row">
                <div className="h-col">
                    <Link to= "/">MYBOOKINGPLACE</Link>
            </div>
            <div className="h-col">
                <button>Registrar</button>
                <button>Iniciar sesion</button>
                </div>
            </div>
            {/* Cambiar o aggregar los iconos */}
            <div className="h-row">
                <div className={type === "smallHeader" ? "h-col smallHeader" : "h-col"}>
                    <div className="icons">
                        <div className="icon ">
                            <FontAwesomeIcon icon={ faCampground }/>
                            <Link to='/' >Cabaña</Link >
                            {/* <FontAwesomeIcon icon={faCalendar}/> */}
                        </div>
                        <div className="icon">
                        <FontAwesomeIcon icon={ faBuilding }/>
                            <Link to='/'>Apartamentos</Link>

                        </div>
                        <div className="icon">
                        <FontAwesomeIcon icon={ faHouseChimney }/>
                            <Link to='/'>Minicasas</Link>

                        </div>
                        <div className="icon">
                        <FontAwesomeIcon icon={ faTent }/>
                            <Link to='/'>Cupulas</Link>

                        </div>
                    </div>

                </div>
                {    type !=="smallHeader" &&
                    <>
                    <div className="h-col">
                        <h2>EXPLORA Y VIAJA</h2>
                    </div>
                    <div className="h-col">
                        <div className="search">
                            <div className="search-item">
                            <FontAwesomeIcon icon={ faMagnifyingGlass }/>
                                <input type="text" onChange={(e) => setDestination(e.target.value)} placeholder='Busqueda' />

                            </div>
                            <div className="search-item">
                                <FontAwesomeIcon icon={faCalendar}/>
                                <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>  

                            {openDate && (<DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date} className="date"
                                    minDate={new Date()}
                                    /> )
                                    }                         
                            </div>
                            <div className="search-item">
                                <button className='btnSearch' onClick={handleSearch}>Buscar</button>

                                
                            </div>
                        </div>

                    </div>   
                </>}
            </div>

        </div>
    
    
    )
}
export default Header