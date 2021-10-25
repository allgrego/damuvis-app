import React from 'react';
import styled from 'styled-components';

const FooterComponent = styled.footer`
    padding: 1rem 0;
    flex-shrink: 0;
    width: 100%;
    margin-top: 2rem;
`;

const Copyright = styled.div`
    line-height: 1;
    font-size: 0.8rem;
`;

const Footer = () => {
    // Año actual
    const year = new Date().getFullYear();

    return (     
    <FooterComponent>
        <div className="container my-auto">
            <Copyright className="text-center my-auto">
                <span>&copy; Damuvis App {year} | Powered by: <a className="h6 text-success" target="_blank" href="https://www.themoviedb.org/">TMDB <i className="fa fa-external-link-alt"></i></a>  | Gregorio Álvarez  <a href="mailto:allgrego14@gmail.com"><i className="fa fa-envelope text-dark"></i></a></span>
            </Copyright>
            
        </div>
    </FooterComponent>
        );
}
 
export default Footer;