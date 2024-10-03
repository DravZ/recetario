import { useEffect, useState } from 'react';
import './ResetaComponent.css';
import { getReceta, receta } from '../../../data/recetas';
import { useParams } from 'react-router-dom';

function RecetaComponent() {
    // Obtener el ID de los parámetros de la URL
    const { id } = useParams<{ id: string }>();
    const recetaId = Number(id) - 1; 

    // Estado inicial de la receta
    const [recetaDetail, setRecetaDetail] = useState<receta | null>(null);

    // Cargar los detalles de la receta al montar el componente
    useEffect(() => {
        const fetchedReceta = getReceta(recetaId);
        setRecetaDetail(fetchedReceta);
    }, [recetaId]);

    // Mostrar un mensaje de carga si la receta aún no ha sido obtenida
    if (!recetaDetail) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="receta-container">
            <h1 className="receta-titulo font-bold" > {recetaDetail.titulo}</h1>
            <img className="receta-imagen" src={recetaDetail.imagen} alt={recetaDetail.titulo} />
            <p className="receta-porciones">Para {recetaDetail.cuantasPersonas} personas</p>
            
            <h2>Ingredientes</h2>
            <ul className="receta-ingredientes">
                {recetaDetail.ingredientes.map((ingrediente, index) => (
                    <li key={index}>{ingrediente}</li>
                ))}
            </ul>
            
            <h2>Pasos</h2>
            <ol className="receta-pasos">
                {recetaDetail.pasos.map((paso, index) => (
                    <li key={index}>{paso}</li>
                ))}
            </ol>
        </div>
    );
}

export default RecetaComponent;
