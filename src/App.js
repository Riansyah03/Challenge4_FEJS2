import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import MainRoute from './routes/MainRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <MainRoute />
      <Footer />
    </>
  );
}

export default App;
