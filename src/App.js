import React, { Component } from 'react';
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import {Ts, Publickey, Hash} from './apiKeys';

import Header from './components/header/header.component';
import Home from './pages/home/home.page';
import Description from './pages/description/description.page';

import './App.scss';


class App extends Component {
  
  constructor(props) {
    super(props);

    this.handlePageClick = this.handlePageClick.bind(this);
    
    this.state = {
      searchField: '',
      characters: [],
      offset: 0,
      perPage: 10,
      currentPage: 1,
      pageCount: 0
    };
  }



  componentDidMount() {

    this.getData();
  }
  
  
  getData() {
    const urls = [
      `https://gateway.marvel.com/v1/public/characters?limit=100&offset=0&ts=${Ts}&apikey=${Publickey}&hash=${Hash}`,
      `https://gateway.marvel.com/v1/public/characters?limit=100&offset=100&ts=${Ts}&apikey=${Publickey}&hash=${Hash}`,
      `https://gateway.marvel.com/v1/public/characters?limit=100&offset=200&ts=${Ts}&apikey=${Publickey}&hash=${Hash}`,
      `https://gateway.marvel.com/v1/public/characters?limit=100&offset=300&ts=${Ts}&apikey=${Publickey}&hash=${Hash}`,
      `https://gateway.marvel.com/v1/public/characters?limit=100&offset=400&ts=${Ts}&apikey=${Publickey}&hash=${Hash}`,
      `https://gateway.marvel.com/v1/public/characters?limit=100&offset=500&ts=${Ts}&apikey=${Publickey}&hash=${Hash}`,
      `https://gateway.marvel.com/v1/public/characters?limit=100&offset=600&ts=${Ts}&apikey=${Publickey}&hash=${Hash}`,
      `https://gateway.marvel.com/v1/public/characters?limit=100&offset=700&ts=${Ts}&apikey=${Publickey}&hash=${Hash}`,
      `https://gateway.marvel.com/v1/public/characters?limit=100&offset=800&ts=${Ts}&apikey=${Publickey}&hash=${Hash}`,
      `https://gateway.marvel.com/v1/public/characters?limit=100&offset=900&ts=${Ts}&apikey=${Publickey}&hash=${Hash}`,
      `https://gateway.marvel.com/v1/public/characters?limit=100&offset=1000&ts=${Ts}&apikey=${Publickey}&hash=${Hash}`,
      `https://gateway.marvel.com/v1/public/characters?limit=100&offset=1100&ts=${Ts}&apikey=${Publickey}&hash=${Hash}`,
      `https://gateway.marvel.com/v1/public/characters?limit=100&offset=1200&ts=${Ts}&apikey=${Publickey}&hash=${Hash}`,
      `https://gateway.marvel.com/v1/public/characters?limit=100&offset=1300&ts=${Ts}&apikey=${Publickey}&hash=${Hash}`,
      `https://gateway.marvel.com/v1/public/characters?limit=100&offset=1400&ts=${Ts}&apikey=${Publickey}&hash=${Hash}`,
    ];

    const requests = urls.map(url => fetch(url).then(res => res.json()));
    const Chars = responses => responses.map(res => res.data.results)

    Promise.all(requests).then(Chars).then(character => {
      let newArray =  [];

      character.forEach(element => {
        element.forEach(e => {
          newArray.push(e)
        })
      });
 
      this.setState({
        characters: [].concat(newArray),
        pageCount: Math.ceil(newArray.length / this.state.perPage)
      })

    })
  }


  onSearchChange = event => {
    this.setState( {searchField: event.target.value} );
  }

  filteredCharacters = () => {
    return this.state.characters.filter(character =>
      character.name
      .includes(this.state.searchField))
  };
  
  handlePageClick = e => {
    const selectPage = e.selected;
    const offset = selectPage * this.state.perPage;

    this.setState({
      currentPage: selectPage,
      offset: offset
    }, () => {
        this.filteredCharacters()
    })
  }
  
  render(){
    const { offset, perPage, pageCount, currentPage} = this.state;

    return (
      <div className="App">
        <Header/>
        <Router>
          <Switch>
            <Route exact path='/'
              render={(props) => 
                <Home 
                  {...props}
                  onSearchChange={this.onSearchChange}
                  filteredCharacters={this.filteredCharacters()}
                  offset={offset}
                  perPage={perPage} 
                  pageCount={pageCount}
                  currentPage={currentPage}
                  handlePageClick={this.handlePageClick}
                />
              } 
            />
            <Route path='/description/:id' render={props => 
              <Description {...props} 
                characters={this.filteredCharacters()}
              />} 
            />
          </Switch>
        </Router>

      </div>
    );
  }
  
}

export default App;
