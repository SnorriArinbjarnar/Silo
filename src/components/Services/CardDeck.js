import React from 'react';
import Card from './Card';

function CardDeck() {
    const items = [
        {
            id: 1,
            title: 'Jarðvinna',
            icon: 'fas fa-snowplow fa-5x brown',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,neque.'
        },
        {
            id: 2,
            title: 'Snjómokstur',
            icon: 'fas fa-snowflake fa-5x text-primary',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,neque.'
        }
        ,
        {
            id: 3,
            title: 'Drenlagnir',
            icon: 'icon-dren font-5x',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,neque.'
        }
        ,
        {
            id: 4,
            title: 'Vegavinna',
            icon: 'fas fa-road fa-5x text-secondary',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,neque.'
        }
    ];

    return(
    items.map( item => {
                return <Card
                            key={item.id}
                            icon={item.icon}
                            text=''
                            title={item.title}
                        />
                    })
        );


}

export default CardDeck;