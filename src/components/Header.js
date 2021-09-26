import React from 'react'   //rfce
import logoVentas from '../images/ventas.svg';
import '../styles/header.css'


function Header() {
    return (
        <div >
             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
             
            <div  className="header"> 
                <div className="header-container ">
                    <div className="header-text">By Julian Bustamante </div>
                </div>
                <div className="header-logo">
                    <img src={logoVentas}  className = "header-img" alt="ventas" />
                </div>     
           
            </div>

            <div className="name-prj"> 
                <div className="name-prj-text">Name of project-MINTIC</div>
            </div>
        </div>
    )
}

export default Header
