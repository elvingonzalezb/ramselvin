import React from 'react'
import Tarjeta from '../componentes/tarjeta'

const Cuerpo = () => {
    return(
        <body>
            <section class="section is-primary">
                <div class="container">
                    <h1 class="title">Developer</h1>
                    <h2 class="subtitle">
                     <strong></strong>
                    </h2>
                </div>
            </section>
            <div className="has-margin-top-2">                        
                <a  className="button has-paddiing-top-4 is-medium is-rounded is-danger"
                    href="https://github.com/elvingonzalezb"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <Tarjeta/>
            </div>
        </body>
      
   
    )
}  

export default Cuerpo;