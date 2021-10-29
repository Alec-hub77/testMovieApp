import React from 'react'
import './App.scss'
import axios from 'axios'

const App = () => {
    const [movie, setMovie] = React.useState([])

    React.useEffect(() => {
        const fetchingData = async () => {
            const res = await axios.get('http://localhost:3000//imdb.json?_limit=10')
            setMovie(res.data)
        }
        fetchingData()
    }, [])

    React.useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            console.log('scroll')
        }
    }
    return (
        <div>
            {movie.map((item) => (
                <h1 key={item.id}>{item.title}</h1>
            ))}
        </div>
    )
}

export default App