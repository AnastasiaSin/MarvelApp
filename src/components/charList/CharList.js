import './charList.scss';
import { useEffect, useState, useRef } from 'react';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/ErrorMessage';
import useMarvelServices from '../../services/MarvelServices';

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);
    const {loading, error, getAllCharacters} = useMarvelServices()

    useEffect(() => {
        onRequest(offset, true)
    }, [])


    const onRequest = (offset, init) => {
       init ? setNewItemLoading(false): setNewItemLoading(true)

        getAllCharacters(offset)
            .then(onCharLoaded)
            
    }

    const onCharLoaded = (newCharList) => {
        let ended = false
        if (newCharList.length < 9) {
            ended = true
        }

        setCharList((list) => [...list, ...newCharList])
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);

    }


    console.log('jhhjhhhh')
    const itemRefs = useRef([])

    const focusOnItem =(id)=> {
        itemRefs.current.forEach((el)=> el.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    const renderItems = (char) => {

        return char.map((item, i) => {
            let imgStyle = { 'objectFit': 'cover' };
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = { 'objectFit': 'unset' };
            }
            return (

                <li 
                 ref={(el)=> itemRefs.current[i] = el}
                 className="char__item"
                 key={item.id}
                  onClick={() => {
                        props.onCharSelected(item.id)
                        focusOnItem(i)
                    }
                  }
                  >
                    <img src={item.thumbnail} alt={item.name} style={imgStyle} />
                    <div className="char__name">{item.name}</div>
                </li>
            )
        })
    }

    const items = renderItems(charList)
    const load = loading && !newItemLoading ? <Spinner /> : null
    const errorMessage = error ? <Error /> : null

    return (
        <div className="char__list">
            <ul className="char__grid">
                {load}
                {errorMessage}
                {items}

            </ul>
            <button
                onClick={() => onRequest(offset)}
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{ 'display': charEnded ? 'none' : 'block' }}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}



export default CharList;