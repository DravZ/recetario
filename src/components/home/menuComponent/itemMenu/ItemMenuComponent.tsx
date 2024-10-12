import styles from './ItemMenuComponent.module.css';


interface ItemMenuProps {
    img: string,
    categoria: string
}

const ItemMenuComponent: React.FC<ItemMenuProps> = ({img, categoria}) =>{
    return(
    <>
        <div className={`card ${styles.card_rectangular}`}>
            <div className={`${styles.gradient}`}></div>
            <div className={`d-flex justify-content-center align-items-center ${styles.text_on_item} font-bold`}>
                {categoria}
            </div>
            <div className={`${styles.img_card_rec}`} style={{ backgroundImage: `url(${img})` }}></div>
        </div>
    </>
    );
}

export default ItemMenuComponent;