
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

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
