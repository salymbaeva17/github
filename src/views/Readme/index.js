import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import {useParams} from "react-router-dom";
import axios from "axios";
import Markdown from "markdown-to-jsx";

const Readme = () => {
    const {username, project} = useParams()
    const [readme, setReadme] = useState("")
    useEffect(() => {
        axios(`https://api.github.com/repos/${username}/${project}/readme`, {
            headers: {Accept: "application/vnd.github.VERSION.raw"}
        }).then(({data}) => setReadme(data))
    }, [project, username])

    return (
        <Layout username={username}>
            {
                readme === "" ? <p className="text-center text-danger">No README.md file</p> :  <Markdown className="readme" >{readme}</Markdown>
            }

        </Layout>
    );
};

export default Readme;