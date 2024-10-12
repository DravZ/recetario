import CategoriasComponent from '../../category/CategoriasComponent/CategoriasComponent';
import styles from './NinosComponent.module.css'

function NinosComponent(){
    return(
        <div className={`${styles.container_grid}`}>
            <img src="/img/Categorias/ninos/ninos_banner.jpg" alt="Niños" />
            <div className={`${styles.overlay}`}>
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