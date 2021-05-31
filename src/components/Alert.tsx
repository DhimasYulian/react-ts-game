import React from 'react'

interface Props {
    message: string,
    color: string,
    show: boolean,
    closeAlert: () => void
}

const Alert: React.FC<Props> = ({message, color, show, closeAlert}) => {
    return (
        <div className={show ? "mt-3" : ""} style={{display: show ? "block": "none"}}>
        <div className={`alert alert-warning alert-dismissible fade show`} role="alert">
            <strong>{color}!</strong> {message}
            <button onClick={closeAlert} type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        </div>
    )
}

export default Alert