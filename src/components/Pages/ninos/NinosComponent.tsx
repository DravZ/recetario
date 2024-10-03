import CategoriasComponent from '../../category/CategoriasComponent/CategoriasComponent';
import './NinosComponent.css'

function NinosComponent(){
    return(
        <div className="container-grid">
            <img src="../../../../public/img/Categorias/ninos/ninos_banner.jpg" alt="Niños" />
            <div className="overlay">
                <div className='row mb-4 d-flex justify-content-center'>
                    <div className='col-11'>
                        <CategoriasComponent categoria="Niños" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NinosComponent;