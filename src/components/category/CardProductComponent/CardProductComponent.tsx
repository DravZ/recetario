import './CardProductComponent.css'
//import React from 'react';

function CardProductComponent(){
    return (
        <>
        <div className="card" style={{width: '18rem'}}>
            <div className="square-img">
                <img src="../../../public/EasterEgg.jpg" alt="Imagen de ejemplo"/>
            </div>
            <div className="card-body">
                <h5 className="card-title">Título del card</h5>
                <p className="card-text">Descripción breve del contenido.</p>
                <a href="#" className="btn btn-primary">Ver más</a>
            </div>
        </div>
        </>
    );
}

export default CardProductComponent;

