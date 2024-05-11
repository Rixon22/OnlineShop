import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Catalogo from '../views/catalogo';

const MyRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={ <Catalogo/> } />
    </Routes>
  </Router>
);

export default MyRoutes;