import './singleComic.scss';
import useMarvelServices from '../../../services/MarvelServices';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from '../../Spinner/Spinner';
import Error from '../../Error/ErrorMessage';

const SingleComicPage = () => {
    const { comicId } = useParams()
    console.log('gg:', comicId)

    const [comic, setComic] = useState(null)
    const { loading, error, getComic, clearError } = useMarvelServices();

    const updateComics = () => {
        clearError()
        getComic(comicId)
            .then(onComicLoaded)
    }

    const onComicLoaded = (char) => {
        setComic(char);
    }


    useEffect(() => {
        updateComics()
    }, [comicId])


    const errorMessage = error ? <Error/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null;

    return (
        <>
        {errorMessage}
        {spinner}
        {content}
        </>
    )
}


const View = ({comic}) => {
    const { name, description, thumbnail, price, pageCount, language } = comic
    return (
        <div className="single-comic">
        <img src={thumbnail} alt={name} className="single-comic__img" />
        <div className="single-comic__info">
            <h2 className="single-comic__name">{name}</h2>
            <p className="single-comic__descr">{description}</p>
            <p className="single-comic__descr">{pageCount}</p>
            <p className="single-comic__descr">Language: {language}</p>
            <div className="single-comic__price">{price}</div>
        </div>
        <Link to=".." className="single-comic__back">Back to all</Link>
    </div>
    )
}

export default SingleComicPage;