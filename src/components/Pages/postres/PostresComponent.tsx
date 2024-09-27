import CategoriasComponent from '../../category/CategoriasComponent/CategoriasComponent';
import './PostresComponent.css'

function PostresComponent(){
    return(
        <>
        <div className='conteiner-fluid'>
            <div className='row justify-content-center m-0'>
                <div className='col-11'>
                    <CategoriasComponent categoria='Postres' nombre='Dylan'/>
                </div>
            </div>
        </div>
        </>
    );
}

export default PostresComponent;