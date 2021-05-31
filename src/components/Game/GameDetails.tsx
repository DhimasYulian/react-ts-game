import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {API_HOST, API_KEY} from '../../constants'
import {Details} from '../../types'
import { DescToggle, DetailsContainer, DetailsDesc, DetailsDescTitle, DetailsTitle, Img, LeftDetails, RightDetails, Row, LeftDetailsFixedLayout, DetailsDescSub, Status, Divider, ScreenshotImg} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import {addGame} from '../../store/actions'
import { Library } from '../../store/types'
import Alert from '../Alert'

interface Props {
    id: string
}

const GameDetails: React.FC<Props> = ({id}) => {
    const [details, setDetails] = useState<Details>({})
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [readMore, setReadMore] = useState<boolean>(false)
    const [alert, setAlert] = useState<boolean>(false)

    const {library} = useSelector((state: Library) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        setLoading(true)
        axios.get('/game', {
            baseURL: `https://${API_HOST}/api`,
            headers: {
                "x-rapidapi-key": API_KEY,
	            "x-rapidapi-host": API_HOST,
            },
            params: {
                id,
            }
        })
        .then(res => {
            setDetails(res.data)
            setLoading(false)
        })
        .catch(err => {
            setError(err.message)
            setLoading(false)
        })
    }, [])

    const handleAddGameToLibrary = (data:Details) => {
        const findGame = library.find(game => game.id === data.id)
        if(findGame){
            setAlert(true)
        }else{
            dispatch(addGame(data))
        }
    }

    return (
        <>
        {error && <p className="text-white mx-auto text-center mt-5">{error}</p>}
        {loading && <p className="text-white mx-auto text-center mt-5">Loading...</p>}
        {
            !loading && !error &&
            <DetailsContainer>
                <Alert 
                    message="Can't add game. This game is already in your library" 
                    color="warning" 
                    show={alert} 
                    closeAlert={() => setAlert(false)}
                />
                <Row>
                    <LeftDetails>
                        <LeftDetailsFixedLayout>
                            <Img src={details?.thumbnail} />
                            <div className="row mt-3">
                                <div className="col-4">
                                    <Status>{details?.status}</Status>
                                </div>
                                <div className="col-8">
                                    <a href={details?.freetogame_profile_url} target="_blank" className="btn btn-primary btn-block py-2">PLAY GAME</a>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                <button 
                                onClick={() => handleAddGameToLibrary(details)} 
                                className="btn btn-outline-primary py-2 btn-block"
                                >ADD TO LIBRARY</button>
                                </div>
                            </div>
                        </LeftDetailsFixedLayout>
                    </LeftDetails>
                    <RightDetails>
                        <DetailsTitle>About {details?.title}</DetailsTitle>
                        <Divider />
                        {details?.description?.split('.').map((desc, idx) => (
                            <>
                            {readMore ? <DetailsDesc>{desc}.</DetailsDesc> : idx <= 2 && <DetailsDesc>{desc}.</DetailsDesc>}
                            </>
                        ))}
                        <DescToggle onClick={() => setReadMore(!readMore)}>{readMore ? "Read Less" : "Read More"}</DescToggle>
                        <DetailsDescTitle className="mt-5">Additional Information</DetailsDescTitle>
                        <DetailsDesc>Please note this free-to-play game may or may not offer optional in-game purchases.</DetailsDesc>
                        <Divider />
                        <div className="row mt-4">
                            <div className="col-4">
                                <DetailsDesc>Title</DetailsDesc>
                                <DetailsDescSub>{details?.title}</DetailsDescSub>
                            </div>
                            <div className="col-4">
                                <DetailsDesc>Developer</DetailsDesc>
                                <DetailsDescSub>{details?.developer}</DetailsDescSub>
                            </div>
                            <div className="col-4">
                                <DetailsDesc>Publisher</DetailsDesc>
                                <DetailsDescSub>{details?.publisher}</DetailsDescSub>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">
                                <DetailsDesc>Release Date</DetailsDesc>
                                <DetailsDescSub>{details?.release_date}</DetailsDescSub>
                            </div>
                            <div className="col-4">
                                <DetailsDesc>Genre</DetailsDesc>
                                <DetailsDescSub>{details?.genre}</DetailsDescSub>
                            </div>
                            <div className="col-4">
                                <DetailsDesc>Platform</DetailsDesc>
                                <DetailsDescSub>{details?.platform}</DetailsDescSub>
                            </div>
                        </div>
                        <DetailsDescTitle className="mt-5">{details?.title} Screenshots</DetailsDescTitle>
                        <Divider />
                        <div className="row mt-3">
                            {
                                details?.screenshots?.map((image) => (
                                    <div className="col-6 col-md-6 mt-3">
                                        <ScreenshotImg src={image.image} alt={image.image} />
                                    </div>
                                ))
                            }
                        </div>
                        <DetailsDescTitle className="mt-5">Minimum System Requirements</DetailsDescTitle>
                        <Divider />
                        <div className="row mt-4">
                            <div className="col-6">
                                <DetailsDesc>Operating System</DetailsDesc>
                                <DetailsDescSub>{details?.minimum_system_requirements?.os || "-" }</DetailsDescSub>
                            </div>
                            <div className="col-6">
                                <DetailsDesc>Processor</DetailsDesc>
                                <DetailsDescSub>{details?.minimum_system_requirements?.processor || "-"}</DetailsDescSub>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6">
                                <DetailsDesc>Memory</DetailsDesc>
                                <DetailsDescSub>{details?.minimum_system_requirements?.memory || "-"}</DetailsDescSub>
                            </div>
                            <div className="col-6">
                                <DetailsDesc>Graphics</DetailsDesc>
                                <DetailsDescSub>{details?.minimum_system_requirements?.graphics || "-"}</DetailsDescSub>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6">
                                <DetailsDesc>Storage</DetailsDesc>
                                <DetailsDescSub>{details?.minimum_system_requirements?.memory || "-" }</DetailsDescSub>
                            </div>
                            <div className="col-6">
                                <DetailsDesc>Additional Notes</DetailsDesc>
                                <DetailsDescSub> - </DetailsDescSub>
                            </div>
                        </div>
                    </RightDetails>
                </Row>
            </DetailsContainer>
        }
        </>
    )
}

export default GameDetails