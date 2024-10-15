import CategoriasComponent from '../../category/CategoriasComponent/CategoriasComponent';
import styles from './PastasComponent.module.css'

function PastasComponent(){
    return(
        <div className={`${styles.container_grid}`}>
            <img src="/img/Categorias/pastas/pastas-banner.jpg" alt="Pastas" />
            <div className={`${styles.overlay}`}>
                <div className='row mb-4 d-flex justify-content-center m-0 p-0'>
                    <div className='col-11 text-center'>
                        <CategoriasComponent categoria="Pastas" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PastasComponent;
