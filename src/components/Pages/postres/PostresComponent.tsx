import CategoriasComponent from '../../category/CategoriasComponent/CategoriasComponent';
import styles from './PostresComponent.module.css'

function PostresComponent(){
    return(
        <div className={`${styles.container_grid}`}>
            <img src="/img/Categorias/postres/banner_pastel_choco.jpg" alt="Postres" />
            <div className={`${styles.overlay}`}>
                <div className='row mb-4 d-flex justify-content-center'>
                    <div className='col-11'>
                        <CategoriasComponent categoria="Postres" />
                        
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PostresComponent;