import axios from "axios";
import React, { useState } from "react";

export default function Add(){

    const [name, setname] = useState("")
    const [email, setMail] = useState("")

    //Using axios's post method to post the entered in the form
    const send = (e) => {
        e.preventDefault()
        axios.post('http://localhost:6969/data/add', {
            name: name,
            email: email
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

    }

    return(
        <div>
            <form onSubmit={send}>
                <label htmlFor="name">Enter your name : </label>
                <input 
                        type="text" 
                        value={name} 
                        onChange={e => setname(e.target.value)} />

                <label htmlFor="mail">Enter your mail : </label>
                <input 
                    type="text" 
                    value={email} 
                    onChange={e => setMail(e.target.value)}/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}