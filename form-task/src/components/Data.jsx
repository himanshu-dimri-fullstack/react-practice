import React, { useState } from 'react'

const Data = () => {

    let data = JSON.parse(localStorage.getItem("key")) || [];
    console.log("data:", data);
    return (
        <>
            <div>
                {
                    data.map((item, i) => {
                        return (
                            <div key={i}>
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Data