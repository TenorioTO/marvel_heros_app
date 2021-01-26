import React from 'react';

import './search-box.styles.scss';
import SearchIcon from '../svg/search-icon.component';

const SearchBox = props => (
    <div>
        <input
            className='search-box'
            type='search'
            placeholder='search'
            onChange={ props.onSearchChange }
        />
        <SearchIcon className='search-icon' />
    </div>
);

export default SearchBox;