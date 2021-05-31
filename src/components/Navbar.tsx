import React from 'react'
import { useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { Library } from '../store/types'

export const Navbar: React.FC = () => {
    const {library} = useSelector((state: Library) => state)

    return (
        <nav className="navbar navbar-dark bg-dark sticky-top">
            <div className="container">
                <NavLink to="/"><span className="navbar-brand mb-0 h1">Game Website</span></NavLink>
                <NavLink to="/mylibrary" className="btn btn-outline-primary">
                    My Library <span className="badge badge-primary ml-1">{library.length}</span>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar