import CategoriasComponent from '../../category/CategoriasComponent/CategoriasComponent';
import './DesayunosComponent.css'

function DesayunosComponent(){
    return(
        <div className="container-grid">
            <img src="../../../../public/img/Categorias/desayunos/desayunos_banner.jpg" alt="Desayunos" />
            <div className="overlay">
                <div className='row mb-4 d-flex justify-content-center'>
                    <div className='col-11'>
                        <CategoriasComponent categoria="Desayunos" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DesayunosComponent;