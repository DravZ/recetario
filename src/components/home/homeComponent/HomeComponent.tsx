import BannerComponent from '../bannerComponent/BannerComponent';
import IndexContentComponent from '../indexContentComponent/IndexContentComponent';
import './HomeComponent.css';
function HomeComponent(){
    return(
        <div>
            <BannerComponent/>
            <IndexContentComponent/>
        </div>
    )
}

export default HomeComponent;