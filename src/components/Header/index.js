import React, {useEffect, useState} from 'react';
import axios from "axios";

const Header = ({username}) => {
    const [user, setUser] = useState({})
    useEffect(() => {
        axios(`https://api.github.com/users/${username}`)
            .then(({data}) => setUser(data))
    }, [username, user])
    console.log(user)
    return (
        <header className="header py-2">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="user">
                    <img src={user.avatar_url} alt={user.name} />
                    <p className="username">{user.login}</p>
                </div>
                <input type="text" className="form-control w-25"/>
            </div>
        </header>
    );
};

export default Header;