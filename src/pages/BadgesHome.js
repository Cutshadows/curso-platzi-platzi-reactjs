import React from 'react';
import '../components/styles/BadgeHome.css'
import astronauta from '../imgs/astronauta_background.png'
import logo from '../imgs/platziconf-logo.svg'

function BadgesHome(){
    return(
        <React.Fragment>
            <div className="BadgeHome"  >
            <div className="container">
                <div className="row">
                        <div className="col-6" >
                             <div>
                                <div className="form-group">
                                <img src={logo} alt=""/>
                                </div>
                                <div className="form-group">
                                    <h1 className="platzi-title">PRINT YOUR BADGES</h1>
                                </div>
                                <div className="form-group" >
                                    <h4 className="platzi-description">The easiest way to manage your conference </h4>
                                </div>
                                <button className="btn btn-primary align" >Start Now</button>
                            </div>
                        </div>
                        <div className="col-6" >
                            <img src={astronauta} className="img-background-astronaut"></img>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BadgesHome