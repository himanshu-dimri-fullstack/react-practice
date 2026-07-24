import React, { useState } from 'react'

const Data = ({ data }) => {

    return (
        <>
            <div>
                {
                    data.map((item) => {
                        return (
                            <div>
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