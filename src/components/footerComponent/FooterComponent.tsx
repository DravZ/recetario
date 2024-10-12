import styles from './FooterComponent.module.css'

function FooterComponent(){
    return(
        <div className={`row justify-content-center mx-0 px-0 ${styles.footer}`}>
            <div className="12">
                <div className={`row ${styles.cont_foot}`}>
                    <div className={`${styles.centered_line_container} py-4 mt-4 mb-2`}>
                        <div className={`${styles.line}`}></div>
                        <span className={`${styles.centered_word} font-46 font-bold`}><h2>FLAVOR FUSION</h2></span>
                        <div className={`${styles.line}`}></div>
                    </div>
                    <h6 className={`${styles.font_clr_white} text-center mb-4`}>
                        © 2024 FLAVOR FUSION. All Rights Reserved
                    </h6>
                </div>
            </div> 
        </div>
    );
}

export default FooterComponent;
