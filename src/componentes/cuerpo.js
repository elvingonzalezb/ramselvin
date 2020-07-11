import React from 'react'
import logo from '../foto.jpg'

const Cuerpo = () => {
    return(
        <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
        
            <img className="masthead-avatar avatar mb-5" src={logo} alt="foto elvin gonzalez" />
           
            <h1 className="masthead-heading text-uppercase mb-0">Developer</h1>
      
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            
            <p className="masthead-subheading font-weight-light mb-0">FrontEnd - BackEnd - Base de datos</p>
        </div>
    </header>
      
   
    )
}  

export default Cuerpo;