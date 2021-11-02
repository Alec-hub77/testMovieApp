import React from 'react'
import './home.scss'
import { MovieCard, Header } from '../../components'
import axios from 'axios'

const Home = () => {
    const [movieData, setMovieData] = React.useState([])

    React.useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/imdb.json')
                setMovieData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])

    console.log(movieData)
    return (
        <div className="home">
            <Header/>
            <MovieCard data={movieData}/>
            {/* <MovieModal/> */}
        </div>
    )
}

export default Home
