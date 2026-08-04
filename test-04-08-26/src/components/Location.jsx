import React, { useRef, useState } from 'react'

const Location = ({ data }) => {
    const [country, setCountry] = useState("")
    const [state, setState] = useState([])
    const [city, setCity] = useState([])

    const handleChange = (e) => {
        setState([])
        setCity([])
        // console.log(e.target.value);
        let c = e.target.value;

        let fetchedData = data.find((item) => item.country == c);

        setState(fetchedData.states)
    }

    const handleState = (e) => {
        let c = e.target.value;

        let fetchedData = state.find((item) => item.state == c);

        // console.log("data", fetchedData);

        setCity(fetchedData.cities)
    }





    return (
        <div>
            <select onChange={handleChange}>
                <option>select country</option>
                {

                    data.map((item) => {
                        return (
                            <>
                                <option key={item.country}>{item.country}</option>
                            </>
                        )
                    })
                }
            </select>

            <select onChange={handleState}>
                <option>select state</option>
                {
                    state.map((item) => {
                        return (
                            <>
                                <option value={item.state}>{item.state}</option>
                            </>
                        )
                    })
                }
            </select>

            <select>
                <option>select city</option>
                {
                    city.map((item) => {
                        return (
                            <>
                                <option value={item}>{item}</option>
                            </>
                        )
                    })
                }
            </select>


        </div>
    )
}

export default Location