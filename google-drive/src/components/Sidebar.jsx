import React from 'react'

const Sidebar = () => {
    return (
        <div class="sidebar">
            <button class="new-btn">
                <i class="fa-solid fa-plus"></i>
                <span>New</span>
            </button>

            <nav class="nav-links">
                <a href="#" class="active"><i class="fa-solid fa-house"></i> Home</a>
                <a href="#"><i class="fa-solid fa-hard-drive"></i> My Drive</a>
                <a href="#"><i class="fa-solid fa-laptop"></i> Computers</a>
                <div class="divider"></div>
                <a href="#"><i class="fa-solid fa-users"></i> Shared with me</a>
                <a href="#"><i class="fa-solid fa-clock"></i> Recent</a>
                <a href="#"><i class="fa-solid fa-star"></i> Starred</a>
                <a href="#"><i class="fa-solid fa-circle-exclamation"></i> Spam</a>
                <a href="#"><i class="fa-solid fa-trash"></i> Trash</a>
                <a href="#"><i class="fa-solid fa-cloud"></i> Storage</a>
            </nav>
        </div>
    )
}

export default Sidebar