
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <main>
          <Header />
          <Services />
          <AboutUs />
          <Contact />
        </main>
        <Footer />
    </div>
  );
}

export default App;
