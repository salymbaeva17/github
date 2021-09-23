import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Repositories = () => {
    const [projects, setProjects] = useState([])
    const {username} = useParams()
    useEffect(() => {
        axios(`https://api.github.com/users/${username}/repos`)
            .then(({data}) => setProjects(data))
    }, [username])
    return (
        <Layout>
            {projects.map(el =>
                <Link to={`/${username}/${el.name}`}>{el.name}</Link>
            )
            }
        </Layout>
    );
};

export default Repositories;