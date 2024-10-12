import NavbarComponent from '../components/navbarComponent/NavbarComponent';
import FooterComponent from '../components/footerComponent/FooterComponent';
import NinosComponent from '@/components/Pages/ninos/NinosComponent';


const NinosPage = () => {
  return (
    <>
      <NavbarComponent />
      <NinosComponent/>
      <FooterComponent />
    </>
  );
};

export default NinosPage;