
import './App.css';
import NavbarHook from './components/Navbar/NavbarHook';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';
import {useState, useEffect} from 'react';

const query = `{
  headerCollection {
    items {
      buttonText
      primaryHeading
      secondaryHeading
      headerBackgroundImage {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
    }
  }

  aboutUsCollection {
    items {
      aboutUsParagraph
      aboutImagesCollection {
        items {
          fileName
          url
        }
      }
    }
  }
}`


function App() {
  const [header, setHeader] = useState(null);
  const [about, setAbout] = useState(null);
  
  const apiURL = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACEID}/`;

  useEffect(() => {
    window 
        .fetch(apiURL, {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN}`
            },
            body: JSON.stringify({query})
        })
        .then((response) => response.json())
        .then(({data, errors}) => {
            if(errors) {
                console.error(errors);
            }

            setAbout(data.aboutUsCollection.items[0]);
            setHeader(data.headerCollection.items[0]);
        })
  }, [apiURL])

  if(!header || !about){
    return <Spinner />
  }

  return (
    
    <div className="App">
        <NavbarHook />
        <main>
          <Header header={header}/>
          <Services />
          <AboutUs about={about} />
          <Contact />
        </main>
        <Footer />
    </div>
  );
}

export default App;
