import CategoriasComponent from '../../category/CategoriasComponent/CategoriasComponent';
import styles from './DylanComponent.module.css';

function DylanComponent() {
    return (
        <div className={`${styles.container_grid}`}>
            <img src="/img/Categorias/easterEgg/easter_banner.jpg" alt="Un Jotito" />
            <div className={`${styles.overlay}`}>
                <div className='row mb-4 d-flex justify-content-center m-0 p-0'>
                    <div className='col-11 text-center'>
                        <CategoriasComponent categoria="Jotito" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DylanComponent;
