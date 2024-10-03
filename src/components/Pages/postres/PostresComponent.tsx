import CategoriasComponent from '../../category/CategoriasComponent/CategoriasComponent';
import './PostresComponent.css'

function PostresComponent(){
    return(
        <div className="container-grid">
            <img src="../../../../public/img/Categorias/postres/banner_pastel_choco.jpg" alt="Postres" />
            <div className="overlay">
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