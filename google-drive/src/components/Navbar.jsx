import React from 'react'

const Navbar = () => {
    return (

        <div class="header">
            <div class="logo-section">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" alt="Drive Logo" />
                <span>Drive</span>
            </div>

            <div class="search-container">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search in Drive" />
            </div>

            <div class="header-icons">
                <i class="fa-regular fa-circle-question"></i>
                <i class="fa-solid fa-gear"></i>
                <i class="fa-solid fa-grip"></i>
                <div class="profile-pic">H</div>
            </div>
        </div>
    )
}

export default Navbar