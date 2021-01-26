import React from 'react';

import './header.styles.scss';
import Logo from '../svg/objective-logo';


const Header = () => (
    <div className='header'>
        <div className='logo-left'>
            <Logo className='logo'/>
        </div>

        <div className='content-right'>
            <div className='text'>
                <span><b>Thiago Tenório</b></span> <span> Teste de Front-End </span> 
            </div>
            <span className='cb-logo'>CB</span>
        </div>
    </div>
);

export default Header;