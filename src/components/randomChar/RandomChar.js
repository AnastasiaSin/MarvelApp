import './randomChar.scss';
import { useEffect, useState } from 'react';
import mjolnir from '../../resources/img/mjolnir.png';
import useMarvelServices from '../../services/MarvelServices';
import Spinner from '../Spinner/Spinner'
import Error from '../Error/ErrorMessage';

const RandomChar = () => {
   
    const [char, setChar] = useState(null);
    const { loading, error, clearError, getCharacter } = useMarvelServices()

    const onCharLoaded = (char) => {
        setChar(char)
    }

    const updateChar = () => {
        let id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        clearError()
        getCharacter(id).then(onCharLoaded)
    }

    useEffect(() => {
        updateChar()
    }, [])



    const load = loading ? <Spinner /> : null
    const errorMessage = error ? <Error /> : null
    const content = !(loading || error || !char) ? <View char={char} /> : null

    return (

        <div className="randomchar">
            {load}
            {errorMessage}
            {content}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br />
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button onClick={updateChar} className="button button__main">
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
            </div>
        </div>
    )
}


const View = ({ char }) => {
    const { thumbnail, name, wiki, pageHome, description } = char
    
    let imgStyle = { 'objectFit': 'cover' };
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = { 'objectFit': 'contain' };
    }
    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className="randomchar__img" style={imgStyle} />
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p title={description} className="randomchar__descr">
                    {description}
                </p>
                <div className="randomchar__btns">
                    <a href={pageHome} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;