import BannerComponent from "../../bannerComponent/BannerComponent";
import MenuComponent from "../menuComponent/MenuComponent";
import styles from "./HomeComponent.module.css"
//import "./HomeComponent.css";
//import "bootstrap/dist/css/bootstrap.min.css";
function HomeComponent() {
  return (
    <div className="container-fluid mx-0 px-0">
      <div className="row mx-0">
        <BannerComponent/>
        <MenuComponent/>
        <hr  className="mb-4"/>
        <div className="row d-flex align-content-center justify-content-center" >
          <div className={`col-11 mt-4 ${styles.ojo}`}> 
            <div className="row">
              <div className="col-6 mt-4 p-0">
                <div
                  className={`${styles.img_index}`} style={{ backgroundImage: `url(https://resizer.otstatic.com/v2/photos/wide-huge/2/50470822.jpg)` }}
                ></div>
              </div>
              <div className="col-6 mx-0 py-0">
                <div className={`row ${styles.div_text} text-fluid d-flex align-content-center`}>
                  <div className="my-4 py-4">
                    <h1 className="text-center">Esto es flavor fusion</h1>
                    <h5>
                      En Flavor Fusion, hemos creado un concepto único donde los sabores
                      del mundo se encuentran en un solo lugar. Nuestro restaurante
                      ofrece una fusión ecléctica de platos, con recetas inspiradas en
                      diversas culturas y cocinas globales. Ya sea que tengas antojo de
                      un suculento corte de carne, un delicioso sushi, una pasta casera,
                      o un postre exótico, en <b>Flavor Fusion</b> lo tenemos todo.
                      <br/><br/>
                      Nuestro objetivo es que cada bocado te lleve en un viaje
                      gastronómico, combinando ingredientes frescos, técnicas
                      tradicionales y un toque moderno. Nos especializamos en crear
                      experiencias inolvidables para el paladar, asegurando que siempre
                      encuentres algo nuevo y emocionante en nuestro menú.
                      <br/><br/>
                      ¡Ven a descubrir el verdadero significado de la fusión de sabores
                      en Flavor Fusion, donde la diversidad culinaria se celebra en cada
                      plato!
                      <br /><br />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className={`col-5 ${styles.div_text}`}>
                <div className="my-4 ">
                  <br></br>
                  <h1 className="text-center">Nuestra misión</h1>
                  <h5>
                    En <b>Flavor Fusion</b>, nuestra misión es ofrecer a nuestros
                    comensales una experiencia gastronómica única, combinando lo mejor
                    de las cocinas del mundo en cada plato. Nos dedicamos a crear
                    sabores innovadores que despierten los sentidos, utilizando
                    ingredientes frescos y de la más alta calidad.
                    <br></br> <br></br>
                    Nos esforzamos por brindar un ambiente acogedor y moderno, donde
                    cada cliente se sienta como en casa y pueda disfrutar de una
                    aventura culinaria inolvidable. Creemos que la comida es una forma
                    de conectar culturas y personas, y nos comprometemos a sorprender
                    y deleitar a nuestros visitantes con cada bocado.
                    <br></br> <br></br>
                    En <b>Flavor Fusion</b>, nuestro objetivo es fusionar el mundo en
                    tu plato, creando momentos especiales que reflejen la diversidad y
                    la riqueza de la gastronomía global.
                    <br />
                    <br />
                  </h5>
                </div>
              </div>
              <div className="col-7 p-0">
                <div
                  className={`${styles.img_index}`} style={{ backgroundImage: `url(https://img.freepik.com/foto-gratis/madre-e-hija-cocinando-cocina-casa_23-2148805020.jpg)` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default HomeComponent;
