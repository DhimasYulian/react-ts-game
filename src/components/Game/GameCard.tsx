import React from 'react'
import {Game} from '../../types'
import browserIcon from '../../assets/icons/browser.svg'
import windowsIcon from '../../assets/icons/windows.svg'
import {StyledLink, Img, Title, Description, Genre, Details, Icon} from './styles'

interface Props {
    content: Game
}

const IconConst = {
    BROWSER: "Web Browser",
    WINDOWS: "PC (Windows)"
}

const GameCard: React.FC<Props> = ({content}) => {
    const { id, title, thumbnail, short_description, genre, platform } = content
    const icons = platform?.split(",").map(item => {
        let icon = null
        switch (item.trim()) {
            case IconConst.BROWSER:
                icon = <Icon src={browserIcon} key={`${id}-browser`} alt="browser icon" />
                break;
            case IconConst.WINDOWS:
                icon = <Icon src={windowsIcon} key={`${id}-windows`} alt="windows icon" />
                break;
            default:
                break;
        }
        return icon
    })
    return (
        <StyledLink to={`game/${id}`}>
            <Img src={thumbnail} alt={title} />
            <Details>
            <Title>{title}</Title>
            <Description>{short_description}</Description>
            <Genre>{genre}</Genre>
                {icons}
            </Details>
        </StyledLink>
    )
}

export default GameCard