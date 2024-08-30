import React from 'react'

const Formulario = ({handleClick = () => {}}) => {
    return (
        <div>
            <input class="input is-link" pattern="^[^\d]+$" type="text" placeholder="Link input" data-testid="inputSinNumeros"/>
            <button class="button is-primary" onClick={handleClick}>Enviar</button>
        </div>
    )
}

export default Formulario;
