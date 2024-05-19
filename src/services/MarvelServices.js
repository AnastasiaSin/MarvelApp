import { useHttp } from "../hooks/http.hook";

const useMarvelServices = () => {
    const _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    const _apiKey = '6a8520ae408f3ecb169ed9497374ed90'
    const _baseOffset = 210;

    const { loading, error, request, clearError } = useHttp()


    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&apikey=${_apiKey}`)
        return res.data.results.map(_transformCharacter)
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?apikey=${_apiKey}`)
        return _transformCharacter(res.data.results[0])
    }

    const getAllComics = async (offset = 0) => {
        const res = await request(
            `${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&apikey=${_apiKey}`
        );
        return res.data.results.map(_transformComic);
    };

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?apikey=${_apiKey}`);
        return _transformComic(res.data.results[0]);
    };

    const _transformComic = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || "There is no description",
            pageCount: comics.pageCount
                ? `${comics.pageCount} p.`
                : "No information about the number of pages",
            thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
            language: comics.textObjects[0]?.language || "en-us",
            price: comics.prices[0].price
                ? `${comics.prices[0].price}$`
                : "not available",
        };
    };

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 230) + '...'}` : 'no desc',
            _description: char.description,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            wiki: char.urls[1].url,
            homepage: char.urls[0].url,
            comics: char.comics.items
        }
    }

    return { loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComic }
}

export default useMarvelServices