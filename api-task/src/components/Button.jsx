import React from 'react'

const Button = ({ setUsers, show, setShow, fetchData }) => {
    const handleClick = () => {
        setShow((prev) => !prev);
        if (show) {
            setUsers([])
        }
        else {
            fetchData();
        }
    }
    return (
        <div>
            <button onClick={handleClick} className='bg-black px-3 py-1 text-white mb-5'>{show ? "hide" : "show"}</button>
        </div>
    )
}

export default Button