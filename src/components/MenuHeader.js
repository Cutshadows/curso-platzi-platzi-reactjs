import React from 'react';
import '../components/styles/MenuHeader.css'
import logo_green from '../imgs/logo-green.webp'
import platzi_logo from '../imgs/platzi.webp'
import pais from '../imgs/chile_icon.svg'




class MenuHeader extends React.Component{
    render(){
        return(
            <div className="MenuHeader">
                <div className="container-fluid "> </div>
                    <div>
                        <img className="Navbar__brand-logo" src={logo_green} alt="logo"/>
                        <img className="Navbar__brand-logo" src={platzi_logo} alt="logo"/>
                        <div className="float-right">
                             <span className="font-weight-bold label-especial"><img src={pais} className="icon_pais"></img><a href="/">ES</a></span>
                             <span className="label-menu">Cursos</span>
                             <span className="label-menu">Blog</span>
                             <span className="label-menu">FAQ</span>
                             <span className="label-menu">Horarios</span>
                             <span className="label-especial"> Live</span>
                             <span className=""></span>
                             <button className="btn btn-xs btn-primary">Inicio sesión </button>
                        </div>
                    </div>
            </div>
        )
    }
}
export default MenuHeader