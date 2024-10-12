import CategoriasComponent from '../../category/CategoriasComponent/CategoriasComponent';
import styles from './PastasComponent.module.css'

function PastasComponent(){
    return(
        <div className={`${styles.container_grid}`}>
            <img src="/img/Categorias/pastas/pastas-banner.jpg" alt="Un Jotito" />
            <div className={`${styles.overlay}`}>
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