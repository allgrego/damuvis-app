import React from 'react';
import styled from 'styled-components';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';


const MainLayout = ({children}) => {
    return (
    <Wrapper id="wrapper" className="bg-light">
        <Navbar/>
        {children}
        <Footer/>
    </Wrapper> 
    );
}
 
export default MainLayout;

const Wrapper = styled.div`
    position: relative;
`;