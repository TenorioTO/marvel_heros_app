import React from 'react';

import { withRouter } from 'react-router-dom';

import './card.styles.scss'


const Card = ({characters, history, name}) => {
    let newSeries = [];
    let newEvents = [];

    if(characters.series.items.length > 0) {
        newSeries = characters.series.items.slice(0, 2);
    }

    if(characters.events.items.length > 0) {
        newEvents = characters.events.items.slice(0, 2);
    }

    return (
        <div className='card-container' onClick={() => history.push(`/description/${characters.id}`) }>
                
            <img    
                alt='Character'
                src={`${characters.thumbnail.path}/standard_small.${characters.thumbnail.extension}`}
            />

            <h3>{ name }</h3>

            <div className='items'>

                {   
                    newSeries.map((item) => 
                        <div key={Math.floor(Math.random() * 20000)} className='item'>
                            {
                                item.name
                            }
                        </div>
                    ) 
                }
            </div>

            <div className='items'>
                {
                    newEvents.map((item) => 
                        <div key={Math.floor(Math.random() * 20000)} className='item'>
                            {
                                item.name
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );

};

export default withRouter(Card);