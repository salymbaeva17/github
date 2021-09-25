import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

const Home = () => {
    const [username, setUsername] = useState("")
    const history = useHistory()
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePress = (e) => {
        if (e.key === "Enter" && username.trim()) {
           handleClick()
        }
    }
    const handleClick = () =>{
        username.trim() && history.push(`/${username}`)
    }
    return (
        <div className="homepage w-100 vh-100">
            <div className="w-25 input-group mb-3">
                <input type="text" onChange={handleChange} onKeyPress={handlePress} className="form-control"
                       placeholder="Enter username" aria-describedby="button-addon2"/>
                <button className="btn btn-success" onClick={handleClick} type="button" id="button-addon2">Search</button>
            </div>
        </div>
    )
}

export default Home