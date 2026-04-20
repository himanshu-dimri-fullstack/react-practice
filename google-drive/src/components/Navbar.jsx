import React from 'react'

const Navbar = () => {
    return (

        <div className="header">
            <div className="logo-section">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" alt="Drive Logo" />
                <span>Drive</span>
            </div>

            <div className="search-container">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search in Drive" />
            </div>

            <div className="header-icons">
                <i className="fa-regular fa-circle-question"></i>
                <i className="fa-solid fa-gear"></i>
                <i className="fa-solid fa-grip"></i>
                <div className="profile-pic">H</div>
            </div>
        </div>
    )
}

export default Navbar