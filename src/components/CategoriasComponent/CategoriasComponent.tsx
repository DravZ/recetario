import CardProductComponent from '../CardProductComponent/CardProductComponent';
import './CategoriasComponent.css'
import React from 'react';

// Definir el tipo de los props usando una interfaz
interface CategoriasComponentProps {
    categoria: string; // Tipo 'string' en minúscula
    nombre: string;
}

const CategoriasComponent: React.FC<CategoriasComponentProps> = ({ categoria, nombre }) => {
    return (
        <div className='row mt-0 mx-4'>

            <h2>{categoria}</h2>

            <CardProductComponent/>
            <CardProductComponent/>
            <CardProductComponent/>
            <CardProductComponent/>
            <CardProductComponent/>
            <CardProductComponent/>
            <CardProductComponent/>
            
        </div>

    );
}

export default CategoriasComponent;