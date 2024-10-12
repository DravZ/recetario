import NavbarComponent from '@/components/navbarComponent/NavbarComponent';
import RecetaComponent from '../../components/Pages/receta/RecetaComponent';
import { getReceta, receta } from '../../data/recetas';
import FooterComponent from '@/components/footerComponent/FooterComponent';

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

// Componente de página que renderiza RecetaComponent
const RecetaPage = ({ recetaDetail }) => {
    return (
        <>
            <NavbarComponent/>
            <RecetaComponent recetaDetail={recetaDetail} />
            <FooterComponent/>
        </>
    );
};

export default RecetaPage;
