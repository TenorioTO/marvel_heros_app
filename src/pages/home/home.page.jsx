import React from 'react';


import SearchBox from '../../components/search-box/search-box.component';
import CardList from '../../components/cards-list/card-list.component';
import Footer from '../../components/footer/footer.component';

import './home.styles.scss';

function Home(props) {

    const { onSearchChange, filteredCharacters, offset, perPage, pageCount, handlePageClick, currentPage } = props;

    return (
        <div className='container'>
            <div className='container-title'>
                <b>Busca de Personagens</b>
            </div>
            
            <div className='search-title' >
                <b>Nome do personagem</b>
            </div>

            <div className='search-container'> 
                <SearchBox onSearchChange={onSearchChange}/>
            </div>

            <div className='title-list'>
                <span>
                    Personagem
                </span>
                <span id='series-span'>
                    Séries
                </span>
                <span id='events-span'>
                    Eventos
                </span>
            </div>


            <div className='container-cards'>
                <CardList 
                    characters={filteredCharacters} 
                    offset={offset} 
                    perPage={perPage}
                />
            </div>

            <Footer 
                pageCount={pageCount}  
                handlePageClick={handlePageClick} 
                currentPage={currentPage}
            />
        </div>
    );
}

export default Home;