import React from 'react'
import Child2 from "./Child2"

const Child1 = ({ data, showData1, showData2 }) => {
    // console.log(data)
    return (
        <div>
            <Child2 data1={data} showData1={showData1} showData2={showData2} />
        </div>
    )
}

export default Child1