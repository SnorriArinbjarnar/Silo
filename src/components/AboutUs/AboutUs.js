import React, {useState, useEffect} from 'react';
import AboutImage from './AboutImage';
import './AboutUs.css';

const query = `{
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

function AboutUs(){
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

                setAbout(data.aboutUsCollection.items[0])
                
            })
    }, [apiURL])

    if(!about){
        
        return "Loading...";
    }
 
    return (
    <section class="test my-4" id="about">
        <div class ="container-fluid padding bg-light">
            <div class="row about-us-2 text-center ">
                <div class="col-12  text-dark">
                    <h1 class=" display-4">Um Okkur</h1>
                </div>
                <div class="col-12 py-2">
                    <p class="text-justify text-dark lead">
                        {about.aboutUsParagraph}  
                    </p>
                </div>
                {
                    about.aboutImagesCollection.items.map( (item, index) => {
                        const classOne = (index + 1) === about.aboutImagesCollection.items.length ? 'col-md-6 col-lg-4' : 'col-md-6 col-lg-4 mb-sm-2';
                        return (
                            <AboutImage link={item.url} containerClass={classOne} key={index}/>
                        );
                    })
                }
               
            </div>
        </div> 
    </section>
    );
}

export default AboutUs;