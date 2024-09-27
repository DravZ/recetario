import './ItemMenuComponent.css';


interface ItemMenuProps {
    img: string,
}

const ItemMenuComponent: React.FC<ItemMenuProps> = ({img}) =>{
    return(
    <>
        <div className='card card-rectangular'>
            <div className='gradient'></div>
            <div className='img-card-rec' style={{ backgroundImage: `url(${img})` }}></div>
        </div>
    </>
    );
}

export default ItemMenuComponent;