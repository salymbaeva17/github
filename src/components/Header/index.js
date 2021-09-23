import React, {useEffect, useState} from 'react';
import axios from "axios";

const Header = ({username}) => {
    const [user, setUser] = useState({})
    useEffect(() => {
        axios(`https://api.github.com/users/${username}`)
            .then(({data}) => setUser(data))
    }, [username])
    return (
        <header>
            <div className="container d-flex justify-content-space-between align-items-center">
                <div className="user">
                    <img src="" alt=""/>
                    <p className="username">{user.name}</p>
                </div>
                <input type="text"/>
            </div>
        </header>
    );
};

export default Header;