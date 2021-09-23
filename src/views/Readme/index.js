import React from 'react';
import Layout from "../../components/Layout";
import {useParams} from "react-router-dom";

const Readme = () => {
    const [username, project] = useParams()

    return (
        <Layout>
            {}
        </Layout>
    );
};

export default Readme;