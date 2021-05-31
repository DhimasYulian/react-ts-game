import React from 'react'
import {List, ListItem} from './styles'
import { useSelector } from 'react-redux'
import { Game, Library } from '../../store/types'
import GameCardDetails from './GameCardDetails'

const GameLibrary: React.FC = () => {
    const {library} = useSelector((state: Library) => state)

    return (
        <>
        {library.length <= 0 ? 
        <>
        <p className="text-white text-center mt-5">No games in your library.</p> 
        </>: 
        <List className="mt-5">
                {library.map((game: Game) => (
                    <ListItem key={game.id}>
                        <GameCardDetails content={game} />
                    </ListItem>
                ))}
        </List> 
        }
        </>
    )
}

export default GameLibrary