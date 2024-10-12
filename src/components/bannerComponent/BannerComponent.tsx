import styles from './BannerComponent.module.css'

function BannerComponent(){
    //Componente de Dylan
    return(
        <div className='col-12'>
            <img src="/img/IndexBanner.jpg" alt=""className={`${styles.img_Banner}`} />
        </div>
    )

}

export default BannerComponent