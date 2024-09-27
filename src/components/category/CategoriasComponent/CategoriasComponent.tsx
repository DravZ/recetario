import CardProductComponent from '../CardProductComponent/CardProductComponent';
import './CategoriasComponent.css'
import React from 'react';
import {recetas} from '../../../data/postres'

// Definir el tipo de los props usando una interfaz
interface CategoriasComponentProps {
    categoria: string; // Tipo 'string' en minúscula
}

const CategoriasComponent: React.FC<CategoriasComponentProps> = ({ categoria}) => {
    return (
        <div className='row mt-0 mx-4 mt-4'>

            <h1 className='font-bold mt-4 mb-4'>{categoria}</h1>
            <div className='row mt-0'>
    {recetas.map((receta, index) => (
        <CardProductComponent
            key={receta.id} // Siempre es importante tener una key única
            id={receta.id}
            img={receta.imagen}
            title={receta.titulo}
        />
    ))}
</div>  
        </div>

    );
}

export default CategoriasComponent;