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
        <Layout username={username}>

            <table className="table table-striped">
                <thead className="table-secondary">
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Username</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Language</th>
                    <th scope="col">README.md</th>
                </tr>
                </thead>

                <tbody>
                {projects.map((el, idx) =>
                    <tr key={el.id}>
                        <th scope="row">{idx + 1}</th>
                        <td>{el.name}</td>
                        <td>{el.created_at?.slice(0, 10).split("-").join(".")}</td>
                        <td>{el.language === null? "-" : el.language}</td>
                        <td className="readme"><Link className="readme-link" to={`/${username}/${el.name}`}>README.md</Link></td>
                    </tr>
                )}

                </tbody>
            </table>
        </Layout>
    );
};

export default Repositories;