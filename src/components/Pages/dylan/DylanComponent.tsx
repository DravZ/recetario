import CategoriasComponent from '../../category/CategoriasComponent/CategoriasComponent';
import './DylanComponent.css'

function DylanComponent(){
    return(
        <div className="container-grid">
            <img src="../../../../public/img/Categorias/easterEgg/easter_banner.jpg" alt="Un Jotito" />
            <div className="overlay">
                <div className='row mb-4 d-flex justify-content-center'>
                    <div className='col-11'>
                        <CategoriasComponent categoria="Jotito" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DylanComponent;