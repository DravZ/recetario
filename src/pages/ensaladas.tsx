import NavbarComponent from '../components/navbarComponent/NavbarComponent';
import FooterComponent from '../components/footerComponent/FooterComponent';
import EnsaladasComponent from '@/components/Pages/ensaladas/EnsaladasComponent';


const EnsaladasPage = () => {
  return (
    <>
      <NavbarComponent />
      <EnsaladasComponent/>
      <FooterComponent />
    </>
  );
};

export default EnsaladasPage;