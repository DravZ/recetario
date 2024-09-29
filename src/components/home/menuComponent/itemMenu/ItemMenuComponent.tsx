import './ItemMenuComponent.css';


interface ItemMenuProps {
    img: string,
    categoria: string
}

const ItemMenuComponent: React.FC<ItemMenuProps> = ({img, categoria}) =>{
    return(
    <>
        <div className='card card-rectangular'>
            <div className='gradient'></div>
            <div className='d-flex justify-content-center align-items-center text-on-item text-item-men font-bold'>
                {categoria}
            </div>
            <div className='img-card-rec' style={{ backgroundImage: `url(${img})` }}></div>
        </div>
    </>
    );
}

export default ItemMenuComponent;