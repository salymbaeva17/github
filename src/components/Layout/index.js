import React from 'react';
import Header from "../Header";

const Layout = ({children, username}) => {
    return (
        <>
            <Header username={username} />
            <div className="container my-4">
                {children}
            </div>
        </>
    );
};

export default Layout;