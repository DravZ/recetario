import NavbarComponent from '../components/navbarComponent/NavbarComponent';
import FooterComponent from '../components/footerComponent/FooterComponent';
import PastasComponent from '@/components/Pages/pastas/PastasComponent';


const PastasPage = () => {
  return (
    <>
      <NavbarComponent />
      <PastasComponent/>
      <FooterComponent />
    </>
  );
};

export default PastasPage;