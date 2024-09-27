import './CardProductComponent.css'
import { Link } from 'react-router-dom';
//import React from 'react';
interface CardProps {
    id: number,// Tipo 'string' en minúscula
    img: string,
    title: string
}

const CardProductComponent: React.FC<CardProps> = ({id, img, title}) =>{
    return (
        <>
        <div className='col-3 px-3'>
            <div className="card col-12 my-2 card-product">
                <Link className='no-decoration fontclr-black' to={'/receta/'+ (id)}>
                    <div className="square-img">
                        <img src={img} alt="Imagen de ejemplo"/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title font-bold text-center">{title}</h4>
                    </div>
                </Link>
            </div>
        </div>
        </>
    );
}

export default CardProductComponent;

