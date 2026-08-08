import React, { useRef, useState } from 'react'

const Location = ({ data }) => {
    const [country, setCountry] = useState("")
    const [state, setState] = useState([])
    const [city, setCity] = useState([])

    const [selectedCountry, setSelectedCountry] = useState("")
    const [selectedState, setSelectedState] = useState("")
    const [selectedCity, setSelectedCity] = useState("")

    const handleChange = (e) => {
        // setState([])
        // setCity([])
        let c = e.target.value;

        setSelectedCountry("c")
        setSelectedState("")
        setSelectedCity("")

        let fetchedData = data.find((item) => item.country == c);

        setState(fetchedData.states)
    }

    const handleState = (e) => {
        let c = e.target.value;
        setSelectedState("c")

        let fetchedData = state.find((item) => item.state == c);

        setCity(fetchedData.cities)
    }

    return (
        <div>
            <select onChange={handleChange} value={selectedCountry}>
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

            <select onChange={handleState} value={selectedState}>
                <option>select state</option>
                {
                    state.map((item) => {
                        return (
                            <>
                                <option>{item.state}</option>
                            </>
                        )
                    })
                }
            </select>

            <select value={selectedCity}>
                <option>select city</option>
                {
                    city.map((item) => {
                        return (
                            <>
                                <option>{item}</option>
                            </>
                        )
                    })
                }
            </select>


        </div>
    )
}

export default Location