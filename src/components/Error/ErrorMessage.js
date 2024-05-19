import img from '../../resources/img/error.gif'

const Error = () => {
    return (
        <img style={{ display: 'block', width: "250px", height: "250px", objectFit: 'contain', margin: "0 auto" }} src={img} alt='error' />
    )
}

export default Error;