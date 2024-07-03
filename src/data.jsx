import React from "react";
import axios  from 'axios'
import { useState, useEffect } from "react";

export default function Data(){

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)

    //Using axios's get method to fetch the data from the backend server
    useEffect(()=> {
        axios.get("http://localhost:6969/data")
        .then(res => {setData(res.data)})
        .then(setLoader(!loader))
        .catch(err => console.log(err.message))
    }, [])

    return (
    <div>
        <p>The user data in the database</p>
        {loader ? data.map((item, index) => (
        <ol key={index}>
            <li>{item.name}</li>
            <li>{item.email}</li>
        </ol>
        )): <p>loading</p>}
        
    </div>
    )
}