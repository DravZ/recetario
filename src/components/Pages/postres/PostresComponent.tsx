import CategoriasComponent from '../../category/CategoriasComponent/CategoriasComponent';
import './PostresComponent.css'

function PostresComponent(){
    return(
        <>
        <div className='conteiner-fluid'>
            <div className='conteiner-rel'>
                <div className='row mx-0 p-0'>
                    <img className='p-0' src="../../../../public/img/Categorias/postres/banner_pastel_choco.jpg" alt="" />
                </div>
                <div className='row justify-content-center m-0'>
                    <div className='col-11 container-category'>
                        <CategoriasComponent categoria='Postres'/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default PostresComponent;