import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({children, username}) => {
    return (
        <>
            <Header username={username} />
            <main className="main">
                <div className="container my-4">
                {children}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;