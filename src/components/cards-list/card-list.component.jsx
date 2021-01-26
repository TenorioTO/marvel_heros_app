import React from 'react';

import './card-list.styles.scss';

import Card from '../card/card.component';

function CardList(props){

    const {characters, offset, perPage} = props; 

    const rangedArray = characters.slice(offset, (offset + perPage));

    return(
       <div className='card-list'>
            {
            rangedArray.map((character) => 
            <Card key={character.id} name={character.name} characters={character} />) 
            }
       </div>
    );

}

export default CardList;