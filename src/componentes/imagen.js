import React from 'react'
import logo from '../foto.jpg'

const Imagen = () => {
    return (
        <figure class="image is-256x256">
            <img class="is-rounded" src={logo} alt="foto elvin gonzalez"/>
        </figure>
    )
}

export default Imagen;