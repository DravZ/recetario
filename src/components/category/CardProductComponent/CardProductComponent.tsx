import styles from "./CardProductComponent.module.css";
import Link from "next/link"; // Importar Link de Next.js
//import React from 'react';
interface CardProps {
  id: number; // Tipo 'string' en minúscula
  img: string;
  title: string;
}

const CardProductComponent: React.FC<CardProps> = ({ id, img, title }) => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 px-3">
        <div className={`card my-2 ${styles.card_product}`}>
          <Link
            className={`${styles.no_decoration} ${styles.fontclr_black}`}
            href={"/receta/" + id}
          >
            <div className={`${styles.square_img}`}>
              <img
                src={img}
                alt="Imagen de ejemplo"
                className={`${styles.sqr_img}`}
              />
            </div>
            <div className="card-body">
              <h4 className="card-title font-bold text-center">{title}</h4>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardProductComponent;
