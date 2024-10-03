import { Link } from 'react-router-dom';
import ItemMenuComponent from './itemMenu/ItemMenuComponent';
import './MenuComponent.css';

function MenuComponent(){
    return(
        <div className='conteiner-fluid my-4 py-4'>
            <div className='row justify-content-center'>
                <div className='col-11 my-1 py-4'>
                    <div className='row'>
                        <div className='col-2 mt-4 pt-4 px-0 d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
                            <Link to="/postres" className='link-cont-men d-flex justify-content-center align-items-center'>
                                <ItemMenuComponent img='../../../../public/img/Categorias/postres/img_recetas/206-pastel-de-tres-leches.jpg' categoria='Postres'/>
                            </Link>
                        </div>
                        <div className='col-2 mb-4 pb-4 px-0 d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
                            <Link to="/ensaladas" className='link-cont-men d-flex justify-content-center align-items-center'>
                                <ItemMenuComponent img='../../../../public/EasterEgg.jpg' categoria='Ensaladas'/>
                            </Link>
                        </div>
                        <div className='col-2 mt-4 pt-4 px-0 d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
                            <Link to="/pastas" className='link-cont-men d-flex justify-content-center align-items-center'>
                                <ItemMenuComponent img='../../../../public/EasterEgg.jpg' categoria='Pastas'/>
                            </Link>
                        </div>
                        <div className='col-2 mb-4 pb-4 px-0 d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
                            <Link to="/desayunos" className='link-cont-men d-flex justify-content-center align-items-center'>
                                <ItemMenuComponent img='../../../../public/EasterEgg.jpg' categoria='Desayunos'/>
                            </Link>
                        </div>
                        <div className='col-2 mt-4 pt-4 px-0 d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
                            <Link to="/ninos" className='link-cont-men d-flex justify-content-center align-items-center'>
                                <ItemMenuComponent img='../../../../public/EasterEgg.jpg' categoria='Niños'/>
                            </Link>
                        </div>
                        <div className='col-2 mb-4 pb-4 px-0 d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
                            <Link to="/dylan" className='link-cont-men d-flex justify-content-center align-items-center'>
                                <ItemMenuComponent img='../../../../public/EasterEgg.jpg' categoria='El Joto'/>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuComponent;