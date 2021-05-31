import React from 'react'
import { DetailsDesc } from './Game/styles'

const Footer: React.FC = () => {
    return (
    <div style={{ 
        backgroundColor: "#1c1e22", 
        width: "100%", 
        textAlign: "center", 
        padding: "40px 0 20px 0",
        marginTop: "20px"
    }}>
        <DetailsDesc>© 2021 Game Website</DetailsDesc>
    </div>
    )
}

export default Footer;