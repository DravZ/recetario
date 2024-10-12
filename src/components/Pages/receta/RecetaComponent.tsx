import { useEffect, useState } from 'react';
import styles from './ResetaComponent.module.css';
import { getReceta, receta } from '../../../data/recetas';
import { useRouter } from 'next/router';

function RecetaComponent({ recetaDetail }: { recetaDetail: receta }) {
    // Estado inicial de la receta
    const [loading, setLoading] = useState<boolean>(false);

    // Mostrar un mensaje de carga si la receta aún no ha sido obtenida
    if (!recetaDetail) {
        return <div>Cargando...</div>;
    }

    return (
        <div className={`${styles.receta_container}`}>
            <h1 className={`${styles.receta_titulo} font-bold`}>{recetaDetail.titulo}</h1>
            <img className={`${styles.receta_imagen}`} src={recetaDetail.imagen} alt={recetaDetail.titulo} />
            <p className={`${styles.receta_porciones}`}>Para {recetaDetail.cuantasPersonas} personas</p>
            
            <h2>Ingredientes</h2>
            <ul className={`${styles.receta_ingredientes}`}>
                {recetaDetail.ingredientes.map((ingrediente, index) => (
                    <li key={index}>{ingrediente}</li>
                ))}
            </ul>
            
            <h2>Pasos</h2>
            <ol className={`${styles.receta_pasos}`}>
                {recetaDetail.pasos.map((paso, index) => (
                    <li key={index}>{paso}</li>
                ))}
            </ol>
        </div>
    );
}

// Función para obtener los datos de la receta según el ID
export async function getServerSideProps(context: { params: { id: string } }) {
    const { id } = context.params;
    const recetaId = Number(id) - 1; // Ajustar el ID según tu lógica

    const fetchedReceta = getReceta(recetaId); // Obtiene la receta

    // Manejar el caso en que no se encuentra la receta
    if (!fetchedReceta) {
        return {
            notFound: true, // Esto mostrará una página 404
        };
    }

    return {
        props: {
            recetaDetail: fetchedReceta, // Pasar los datos de la receta como prop
        },
    };
}

export default RecetaComponent;
