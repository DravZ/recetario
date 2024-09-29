import './FooterComponent.css'

function FooterComponent(){
    return(
        <div className="row justify-content-center mx-0 px-0 footer">
            <div className="12">
                <div className="row cont-foot">
                    <div className="centered-line-container py-4 mt-4 mb-2">
                        <div className="line"></div>
                        <span className="centered-word font-46 font-bold"><h2>FLAVOR FUSION</h2></span>
                        <div className="line"></div>
                    </div>
                    <h6 className="font-clr-white text-center mb-4">
                        © 2024 FLAVOR FUSION. All Rights Reserved
                    </h6>
                </div>
            </div> 
        </div>
    );
}

export default FooterComponent;
