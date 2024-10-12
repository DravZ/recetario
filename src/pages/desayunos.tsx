import NavbarComponent from '../components/navbarComponent/NavbarComponent';
import FooterComponent from '../components/footerComponent/FooterComponent';
import DesayunosComponent from '@/components/Pages/desayunos/DesayunosComponent';


const DesayunosPage = () => {
  return (
    <>
      <NavbarComponent />
      <DesayunosComponent/>
      <FooterComponent />
    </>
  );
};

export default DesayunosPage;