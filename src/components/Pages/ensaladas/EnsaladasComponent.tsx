import CategoriasComponent from '../../category/CategoriasComponent/CategoriasComponent';
import './EnsaladasComponent.css'

function EnsaladasComponent(){
    return(
        <div className="container-grid">
            <img src="../../../../public/img/Categorias/ensaladas/ensalada-banner.jpg" alt="Ensaladas" />
            <div className="overlay">
                <div className='row mb-4 d-flex justify-content-center'>
                    <div className='col-11'>
                        <CategoriasComponent categoria="Ensaladas" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default EnsaladasComponent;