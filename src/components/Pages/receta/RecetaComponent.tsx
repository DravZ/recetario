import { useEffect, useState } from 'react';
import './ResetaComponent.css'
import {getReceta, receta} from '../../../data/postres'
import { useParams } from 'react-router-dom';

function RecetaComponent() {
    const { id } = useParams<{ id: string }>();
    const recetaId = Number(id) -1; // Obtener el id de los parámetros

    const [recetaDetail, setRecetaDetail] = useState<receta | null>(null); // Inicializa el estado

    // Llama a la función cuando se monta el componente
    useEffect(() => {
        const fetchedReceta = getReceta(recetaId); // Llama a la función y guarda el resultado
        setRecetaDetail(fetchedReceta); // Actualiza el estado con la receta devuelta
    }, [recetaId]);

    // Manejo de estado en caso de que la receta no se encuentre
    if (!recetaDetail) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>{recetaDetail.titulo}</h1>
            <img src={recetaDetail.imagen} alt={recetaDetail.titulo} />
            <p>Para {recetaDetail.cuantasPersonas} personas</p>
            <h2>Ingredientes</h2>
            <ul>
                {recetaDetail.ingredientes.map((ingrediente, index) => (
                    <li key={index}>{ingrediente}</li>
                ))}
            </ul>
            <h2>Pasos</h2>
            <ol>
                {recetaDetail.pasos.map((paso, index) => (
                    <li key={index}>{paso}</li>
                ))}
            </ol>
        </div>
    );
};



export default RecetaComponent;