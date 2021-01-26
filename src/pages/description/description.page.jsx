import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';

import './description.styles.scss';

const DescriptionPage = (props) => {

    const { characters, match, history} = props;


    const char = characters.filter(function(el) {
        return el.id == match.params.id
    });

    const newCharacter = char[0];

    return (
        <div className='container-description'>
            <div className='back-button'>
                <CustomButton onClick={() => {
                    history.goBack();
                }}>
                    Voltar
                </CustomButton>
            </div>

            <div className="container-img">

                <img    
                    alt='Character'
                    src={`${newCharacter.thumbnail.path}/standard_large.${newCharacter.thumbnail.extension}`}
                />

                <h2> {newCharacter.name} </h2>

            </div>

            <hr className='section-divider'/>

            <div className="container-description">

                <div className='title'>
                    Description:
                </div>
                <p className='text-description'>
                    { newCharacter.description 
                    ? newCharacter.description 
                    : "No Description"}
                </p>

            </div>
            {
                newCharacter.series.items.length > 0
                ?   <div className='container'>
                        
                        <div className='title'>
                            Séries: 
                        </div>
                        <div className='items'>
                            {
                                newCharacter.series.items.map(item => 
                                    <div key={Math.floor(Math.random() * 20000)} className='item'>                                                               
                                        {item.name}
                                    </div>
                                )
                            }
                        </div>

                    </div>
                : ''
            }

            {
                newCharacter.stories.items.length > 0 
                ?   <div className='container'>
                        
                        <div className='title'>
                            Estórias: 
                        </div>
                        <div className='items'>
                            {
                                newCharacter.stories.items.map(item =>
                                    <div key={Math.floor(Math.random() * 20000)} className='item'>
                                        {item.name}
                                    </div>
                                )
                            }
                        </div>

                    </div>
                : ''
            }

            
            {
                newCharacter.events.items.length >= 0 
                ?   <div className='container'>

                        <div className='title'>
                            Events:
                        </div>
                        <div className='items'>
                            {
                                newCharacter.events.items.map(item => 
                                    <div key={Math.floor(Math.random() * 20000)} className='item'>
                                        {item.name}
                                    </div>)
                            }
                        </div>

                    </div>
                : ''
            }
        </div>
    )
        


}


export default DescriptionPage;