import React, {ChangeEvent, useCallback, useEffect, useState} from 'react'
import {Game, Filter} from '../../types'
import GameCard from './GameCard'
import axios from 'axios'
import {API_KEY, API_HOST} from '../../constants'
import {List, ListItem} from './styles'
import GameFilter from './GameFilter'

const GameList: React.FC = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [filter, setFilter] = useState<Filter>({
        platform: 'browser', 
        sortBy: 'relevance'
    })

    const {platform, sortBy, genre, tag} = filter

    useEffect(() => {
        setLoading(true)
        axios.get('/games', {
            baseURL: `https://${API_HOST}/api`,
            headers: {
                "x-rapidapi-key": API_KEY,
	            "x-rapidapi-host": API_HOST,
            },
            params: {
                platform,
				category: genre,
				tag,
				'sort-by': sortBy,
            }
        })
        .then(res => {
            setGames(res.data)
            setLoading(false)
        })
        .catch(err => {
            setError(err.message)
            setLoading(false)
        })
    }, [platform, sortBy, genre, tag])

    const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
        setFilter(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        e.preventDefault()
    }, [])

    return (
        <>
        {error && <p className="text-white mx-auto text-center mt-5">{error}</p>}
        {loading && <p className="text-white mx-auto text-center mt-5">Loading...</p>}
        {
        !loading && !error &&
            <>
            <GameFilter onChange={onFilterChange} />
            <List>
                {games.map(game => (
                    <ListItem key={game.id}>
                        <GameCard content={game} />
                    </ListItem>
                ))}
            </List> 
            </>
        }
        </>
    )
}

export default GameList