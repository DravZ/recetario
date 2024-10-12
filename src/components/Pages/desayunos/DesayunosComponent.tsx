import CategoriasComponent from '../../category/CategoriasComponent/CategoriasComponent';
import styles from './DesayunosComponent.module.css'

function DesayunosComponent(){
    return(
        <div className={`${styles.container_grid}`}>
            <img src="/img/Categorias/desayunos/desayunos_banner.jpg" alt="Desayunos" />
            <div className={`${styles.overlay}`}>
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