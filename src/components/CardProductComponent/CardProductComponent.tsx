import './CardProductComponent.css'
//import React from 'react';

function CardProductComponent(){
    return (
        <>
        <div className="card" style={{ width: '18rem' }}>
            <img src="../../../public/EasterEgg.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Joto de Nacimiento</h5>
                <p className="card-text">Mi tio me dio a probar helado con los ojos cerrados y me gusto</p>
                <a href="#" className="btn btn-primary">Ve rmi historia</a>
            </div>
        </div>
        </>
    );
}

export default CardProductComponent;

