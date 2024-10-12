import Link from 'next/link'; // Importar Link de Next.js
import ItemMenuComponent from './itemMenu/ItemMenuComponent';
import Image from 'next/image'; // Importar el componente Image
import styles from './MenuComponent.module.css';

function MenuComponent() {
    return (
        <div className='container-fluid my-4 py-4'>
            <div className='row justify-content-center'>
                <div className='col-11 my-1 py-4'>
                    <div className='row'>
                        {/* Menú de enlaces */}
                        <div className='col-2 mt-4 pt-4 px-0 d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
                            <Link href="/postres" className={`${styles.link_cont_men} d-flex justify-content-center align-items-center`}>
                                <ItemMenuComponent img='/img/Categorias/postres/img_recetas/206-pastel-de-tres-leches.jpg' categoria='Postres' />
                            </Link>
                        </div>
                        <div className='col-2 mb-4 pb-4 px-0 d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
                            <Link href="/ensaladas" className={`${styles.link_cont_men} d-flex justify-content-center align-items-center`}>
                                <ItemMenuComponent img='/img/Categorias/ensaladas/ensalada-quesos.jpg' categoria='Ensaladas' />
                            </Link>
                        </div>
                        <div className='col-2 mt-4 pt-4 px-0 d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
                            <Link href="/pastas" className={`${styles.link_cont_men} d-flex justify-content-center align-items-center`}>
                                <ItemMenuComponent img='/img/Categorias/pastas/pasta-lasana.jpg' categoria='Pastas' />
                            </Link>
                        </div>
                        <div className='col-2 mb-4 pb-4 px-0 d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
                            <Link href="/desayunos" className={`${styles.link_cont_men} d-flex justify-content-center align-items-center`}>
                                <ItemMenuComponent img='/img/Categorias/desayunos/desayuno-panTiramisu.jpg' categoria='Desayunos' />
                            </Link>
                        </div>
                        <div className='col-2 mt-4 pt-4 px-0 d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
                            <Link href="/ninos" className={`${styles.link_cont_men} d-flex justify-content-center align-items-center`}>
                                <ItemMenuComponent img='/img/Categorias/ninos/nino-tiraPollo.jpg' categoria='Niños' />
                            </Link>
                        </div>
                        <div className='col-2 mb-4 pb-4 px-0 d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
                            <Link href="/dylan" className={`${styles.link_cont_men} d-flex justify-content-center align-items-center`}>
                                <ItemMenuComponent img='/img/EasterEgg.jpg' categoria='Dylan' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuComponent;
