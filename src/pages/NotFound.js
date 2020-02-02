import React from 'react';
import '../components/styles/NotFound.css'
import lost_in_space from '../imgs/astronaut-icon-vector.png'

function NotFound(){
    return(
        <div className="NotFound">
            <div className="col-6 float-right img-not-found">
                <img src={lost_in_space} width="80%" alt=""/>
            </div>
            <div className="col-6 not-found">
                    <label> 404 Not Found </label>
            </div>
        </div>
    )
}
export default NotFound