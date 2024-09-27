import BannerComponent from "../bannerComponent/BannerComponent";
import MenuComponent from "../menuComponent/MenuComponent";
import "./HomeComponent.css";
//import "bootstrap/dist/css/bootstrap.min.css";
function HomeComponent() {
  return (
    <div className="container-fluid">
      <div className="row">
        <BannerComponent/>
        <MenuComponent/>
        <hr  className="mb-4"/>
        <div className="col-7 mt-4">
          <img
            className="img-fluid"
            src="https://centrosantafe.com.mx/cdn/shop/articles/Restaurantes_Comida_Internacional.JPG?v=1555022012"
          ></img>
        </div>
        <div className="col-5">
          <div className="div-text text-fluid">
            <h2 className="text-center">Esto es flavor fusion</h2>
            <p>
              En Flavor Fusion, hemos creado un concepto único donde los sabores
              del mundo se encuentran en un solo lugar. Nuestro restaurante
              ofrece una fusión ecléctica de platos, con recetas inspiradas en
              diversas culturas y cocinas globales. Ya sea que tengas antojo de
              un suculento corte de carne, un delicioso sushi, una pasta casera,
              o un postre exótico, en <b>Flavor Fusion</b> lo tenemos todo.
              <br></br> <br></br>
              Nuestro objetivo es que cada bocado te lleve en un viaje
              gastronómico, combinando ingredientes frescos, técnicas
              tradicionales y un toque moderno. Nos especializamos en crear
              experiencias inolvidables para el paladar, asegurando que siempre
              encuentres algo nuevo y emocionante en nuestro menú.
              <br></br> <br></br>
              ¡Ven a descubrir el verdadero significado de la fusión de sabores
              en Flavor Fusion, donde la diversidad culinaria se celebra en cada
              plato!
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div>
            <br></br>
            <h2 className="text-center">Nuestra misión</h2>
            <p>
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
            </p>
          </div>
        </div>

        <div className="col-7">
          <img
            className="img-fluid imagenDos"
            src="https://cdn.prod.website-files.com/6423e8cf97045d0ac6e9ffb9/6565d9491a89f4b7b7915b3e_tipos%20de%20restaurante.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
