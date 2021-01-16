import React, {useState, useEffect, useCallback} from 'react';
import './Header.css';

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
  }`

function Header(){
    const [header, setHeader] = useState(null);
    const apiURL = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACEID}/`;
    
    const loadData = useCallback(() => {
        fetch(apiURL,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN}`
            },
            body: JSON.stringify({query}),
        })
        .then((response) => response.json())
        .then(({data, errors}) => {
            if(errors){
                console.error(errors);
            }
            setHeader(data.headerCollection.items[0]);
    
        });
        },
        [apiURL])


    useEffect(() => {
        loadData();
    }, [loadData])

  
    if(!header){
        return "Loading...";
    }


    return (
        <header class="header d-flex justify-content-center align-items-end s" id="header" style={{backgroundImage: `url("${header.headerBackgroundImage.url}")`}}>
            <div class="container-fluid ">
                <div class="row ">
                    <div class="col-12 text-center">
                        <div class="header-mask w-100"></div>
                        <h1 class="display-2 text-center mb-4">
                            <span class="primary-heading">{header.primaryHeading}</span>
                            <span class="secondary-heading">{header.secondaryHeading}</span>
                        </h1>
                        <a href="#contact" class=" btn btn-lg btn-success mb-5">Fá Tilboð</a>
                    </div>
                </div>
            </div>
      </header>
    );
}

export default Header;