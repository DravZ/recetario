import CategoriasComponent from '../../category/CategoriasComponent/CategoriasComponent';
import styles from './DylanComponent.module.css'

function DylanComponent(){
    return(
        <div className={`${styles.container_grid}`}>
            <img src="/img/Categorias/easterEgg/easter_banner.jpg" alt="Un Jotito" />
            <div className={`${styles.overlay}`}>
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