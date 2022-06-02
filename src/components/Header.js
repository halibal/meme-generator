import React from 'react';
import troll from '../images/troll_face.png'

function Header() {
    return (
        <header className='header'>
            <img src={troll} alt="troll face" className='header-image' />
            <h2 className='header-title'>Meme Generator</h2>
        </header>
    )
}

export default Header;