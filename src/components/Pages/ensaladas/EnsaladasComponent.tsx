import CategoriasComponent from '../../category/CategoriasComponent/CategoriasComponent';
import styles from './EnsaladasComponent.module.css';

function EnsaladasComponent() {
    return (
        <div className={`${styles.container_grid}`}>
            <img src="/img/Categorias/ensaladas/ensalada-banner.jpg" alt="Ensaladas" />
            <div className={`${styles.overlay}`}>
                <div className='row mb-4 d-flex justify-content-center m-0 p-0'>
                    <div className='col-11 text-center'>
                        <CategoriasComponent categoria="Ensaladas" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EnsaladasComponent;
