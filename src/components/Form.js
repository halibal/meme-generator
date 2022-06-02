import React, { useState, useEffect } from 'react';
import logo from '../images/image_logo.png';

function Form() {

    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/1bij.jpg",
        }
    );

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(e) {
        e.preventDefault();
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main className='meme-main'>
            <form className='form'>
                <div className='input-group'>
                    <input
                        type="text"
                        name='topText'
                        placeholder='Top text'
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name='bottomText'
                        placeholder='Bottom text'
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button className='img-generator-btn' onClick={getMemeImage}>
                    Get a new meme image
                    <img src={logo} alt="logo" className='logo' />
                </button>
            </form>
            <div className='meme-image-container'>
                <img src={meme.randomImage} alt="meme" className='meme-image' />
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
            </div>
        </main>

    )
}

export default Form;