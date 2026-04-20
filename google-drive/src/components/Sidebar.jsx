import React from 'react'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <button className="new-btn">
                <i className="fa-solid fa-plus"></i>
                <span>New</span>
            </button>

            <nav className="nav-links">
                <a href="#" className="active"> Home</a>
                <a href="#"> My Drive</a>
                <a href="#">Computers</a>
                <div className="divider"></div>
                <a href="#"> Shared with me</a>
                <a href="#"> Recent</a>
                <a href="#"> Starred</a>
                <a href="#">Spam</a>
                <a href="#"> Trash</a>
                <a href="#">Storage</a>
            </nav>
        </div>
    )
}

export default Sidebar