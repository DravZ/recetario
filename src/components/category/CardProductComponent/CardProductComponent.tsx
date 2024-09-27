import './CardProductComponent.css'
//import React from 'react';

function CardProductComponent(){
    return (
        <>
        <div className='col-3 px-3'>
            <div className="card col-12 my-2 card-product">
                <div className="square-img">
                    <img src="../../../public/EasterEgg.jpg" alt="Imagen de ejemplo"/>
                </div>
                <div className="card-body">
                    <h4 className="card-title font-bold text-center">Chorizo con Huevos</h4>
                </div>
            </div>
        </div>
        </>
    );
}

export default CardProductComponent;

