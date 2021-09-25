import React from 'react';

const Footer = () => {
    return (
        <footer className="footer py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <span>&copy;All rights reserved 2021</span>
                <div className="social-media">
                    <span className="mx-3">
                        <a className="sm-icon" rel="noreferrer" href="https://github.com/salymbaeva17" target="_blank"><i className='bx bxl-github'/></a>
                    </span>
                    <span className="mx-3">
                        <a className="sm-icon" rel="noreferrer" href="https://www.linkedin.com/in/aitolkun-salymbaeva" target="_blank"><i className='bx bxl-linkedin'/></a>
                    </span>
                    <span className="mx-3">
                        <a className="sm-icon" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100022233753912" target="_blank"><i className='bx bxl-facebook'/></a>
                    </span>
                    <span className="mx-3">
                        <a className="sm-icon" rel="noreferrer" href="https://www.instagram.com/aitolkun_17" target="_blank"><i className='bx bxl-instagram'/></a>
                    </span>
                </div>
                <span>Privacy</span>
            </div>
        </footer>
    );
};

export default Footer;