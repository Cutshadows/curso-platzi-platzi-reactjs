import React from 'react';
import logoConf from '../imgs/badge-header.svg';
import twitter from '../imgs/twitter.png';
import chile_icon from '../imgs/chile_icon.svg';

import Gavatar from './Gavatar';



import "./styles/Badge.css";

class Badge extends React.Component{
    render(){
        //this.props;
        //const firstName="Douglas"; //no cambia si no pasan props
        //const lastName="Barraza";

        return (
            <div className="Badge">
                <div className="Badge_header">
                    <img src={logoConf} alt="Logo de la conferencia" />
                </div>
				<div className="Badge_section-name">
					<Gavatar className="Badge_avatar" avatar={this.props.avatarUrl} alt="Avatar"/>
					{/* <img
					className="Badge_avatar"
					 src={this.props.avatarUrl}
					 alt="Avatar" /> */}

                    <h1> {this.props.firstName} <br /> {this.props.lastName}</h1>
                </div>
                <div className="Badge_section-info">
                    <h3>{this.props.jobTitle}</h3>

                    <div className="twitter_info"> <img width="20px" src={twitter} alt="Avatar" />@{this.props.twitter} <img width="20px" src={chile_icon} alt="Avatar" /></div>
                </div>
                <div className="Badge_footer">
                 #PlatziConf
                </div>
            </div>
        )
    }
}
export default Badge;
