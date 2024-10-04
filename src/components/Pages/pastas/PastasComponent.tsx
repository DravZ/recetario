import CategoriasComponent from '../../category/CategoriasComponent/CategoriasComponent';
import './PastasComponent.css'

function PastasComponent(){
    return(
        <div className="container-grid">
            <img src="../../../../public/img/Categorias/easterEgg/easter_banner.jpg" alt="Un Jotito" />
            <div className="overlay">
                <div className='row mb-4 d-flex justify-content-center m-0 p-0'>
                    <div className='col-11'>
                        <CategoriasComponent categoria="Pastas" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PastasComponent;