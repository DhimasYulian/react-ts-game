import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'
import { Link } from 'react-router-dom'
import {
	tertiaryTextColor,
	secondaryColor,
	primaryTextColor,
	secondaryTextColor,
	backgroundColor,
} from '../../styles/theme'

export const List = styled.ul`
	display: block;
	max-width: 542px;
	margin: 0 auto;
	padding: 0 16px;
	list-style-type: none;
	box-sizing: border-box;

	@media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
	}

	@media (min-width: ${breakpoints.desktop}) {
		max-width: ${breakpoints.desktop};
	}
`

export const ListItem = styled.li`
	margin-bottom: 24px;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
	}

	@media (min-width: ${breakpoints.tablet}) {
		display: inline-block;
		max-width: 332px;
		margin-right: 24px;

		&:nth-of-type(even) {
			margin-right: 0;
		}
	}

	@media (min-width: ${breakpoints.desktop}) {
		max-width: 312px;

		&:nth-of-type(even) {
			margin-right: 24px;
		}

		&:nth-of-type(3n + 3) {
			margin-right: 0;
		}
	}
`

export const StyledLink = styled(Link)`
	width: 100%;
	display: inline-block;
	background-color: ${secondaryColor};
	border-radius: 4px;
	text-decoration: none !important;
`

export const Img = styled.img`
	width: 100%;
`

export const Title = styled.h2`
	margin: 0;
	font-size: 24px;
	font-weight: 510;
	color: ${primaryTextColor};
	@media (min-width: ${breakpoints.tablet}) {
		overflow: hidden;
		text-overflow: ellipsis;
	}
`

export const Details = styled.div`
	padding: 20px;
	@media (min-width: ${breakpoints.tablet}) {
		white-space: nowrap;
	}
`

export const Description = styled.p`
	font-size: 16px;
	color: ${secondaryTextColor};
	@media (min-width: ${breakpoints.tablet}) {
		overflow: hidden;
		text-overflow: ellipsis;
	}
`

export const Icon = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 8px;
`

export const Genre = styled.p`
	padding: 2px 4px;
	margin: 0 8px 0 0;
	border-radius: 4px;
	font-size: 12px;
	font-weight: bold;
	color: ${tertiaryTextColor};
	background-color: ${backgroundColor};
	float: right;
`

export const Form = styled.form`
	display: flex;
	justify-content: space-between;
	max-width: 542px;
	padding: 0 16px;
	margin: 24px auto;
	color: ${secondaryTextColor};
	box-sizing: border-box;
	@media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
	}
	@media (min-width: ${breakpoints.desktop}) {
		max-width: 1010px;
	}
`

export const Label = styled.label`
	display: inline-block;
	margin-right: 16px;
	flex-basis: 25%;
	&:last-of-type {
		margin-right: 0;
	}
`

export const Select = styled.select`
	width: 100%;
	margin-top: 8px;
	color: white;
	background-color: ${backgroundColor};
`

export const DetailsContainer = styled.div`
	max-width: 95%;
	margin: auto;

	@media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
	}

	@media (min-width: ${breakpoints.desktop}) {
		max-width: ${breakpoints.desktop};
	}
`

export const Row = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	width: 100%;

	@media (min-width: ${breakpoints.tablet}) {
		flex-direction: column;
	}

	@media (min-width: ${breakpoints.desktop}) {
		flex-direction: row;
	}
`

export const LeftDetails = styled.div`
	width: 95%;
	margin: 20px auto;
	position: relative;

	@media (min-width: ${breakpoints.tablet}) {
		width: 100%;
		margin: 20px auto;
	}

	@media (min-width: ${breakpoints.desktop}) {
		width: 35%;
		margin: 30px auto;
		padding: 0 10px;
	}
`

export const RightDetails = styled.div`
	width: 95%;
	margin: 20px auto;

	@media (min-width: ${breakpoints.tablet}) {
		width: 100%;
		margin: 20px auto;
	}

	@media (min-width: ${breakpoints.desktop}) {
		width: 65%;
		margin: 30px auto;
		padding: 0 10px;
	}
`

export const LeftDetailsFixedLayout = styled.div`
	width: 100%;
	position: sticky;
	top: 70px;
`

export const DetailsTitle = styled.h2`
	color: ${primaryTextColor}
`
export const DetailsDescTitle = styled.h3`
	color: ${primaryTextColor}
`
export const DetailsDescSub = styled.h6`
	color: ${primaryTextColor};
	margin-top: -10px;
`
export const DetailsDesc = styled.p`
	color: ${secondaryTextColor}
`

export const Status = styled.div`
	color: ${primaryTextColor};
	background-color: rgba(122, 130, 136, .5);
	width: 100%;
	padding: 10px 0;
	text-align: center;
	border-radius: 5px;
`

export const  Divider = styled.hr`
	background-color: rgba(122, 130, 136, .4);
`

export const DescToggle = styled.button`
	color: ${primaryTextColor};
	background-color: transparent;
	padding: 5px 10px;
	border-radius: 5px;
	border: .5px solid ${primaryTextColor};
`

export const ScreenshotImg = styled.img`
	width: 100%;
	height: 120px;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		transform: scale(1.05);
		transition: .3s all ease-in-out;
	}
	@media (min-width: ${breakpoints.tablet}) {
		height: 150px;
	}

	@media (min-width: ${breakpoints.desktop}) {
		height: 150px;
	}
`