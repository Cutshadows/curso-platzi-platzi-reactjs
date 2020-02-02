import React from 'react';
import Navbar from './Navbar';
import MenuHeader from './MenuHeader';
import './styles/Badge.css'

function Layout(props){
    const children=props.children;
    return (
        <React.Fragment>
            <MenuHeader />
            <Navbar />
            {children}
        </React.Fragment>
    )
}

/* class Layout extends React.Component{
    render(){
        return(
            <Navbar />
        )
    }
} */
export default Layout;