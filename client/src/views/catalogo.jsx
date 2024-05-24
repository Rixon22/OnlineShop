import TablaCatalogo from '../components/tablaCatalogo/tablaCatalogo.jsx';
import Navbar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';

const Catalogo = () => {
    return (
        <div>
            <Navbar />
            <TablaCatalogo />
            <Footer />
        </div>
    );
}

Catalogo.displayName = 'Catalogo';
export default Catalogo;