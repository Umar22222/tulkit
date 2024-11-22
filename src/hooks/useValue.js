import { useState } from "react";

export const useValue = (initialState) => {
    const [data, setData] = useState(initialState)
    const handleChange = (e) => {
        const {value, name} = e.target
        setData((prev)=> ({...prev, [name]: value}))
    }
    return {data, setData, handleChange}
}