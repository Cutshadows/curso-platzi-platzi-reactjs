import React from 'react';
import AccordeonComp from '../components/AccordeonComp'

import '../components/styles/AccordeonStyle.css'


class Accordeon extends React.Component{   

      render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="accordeon">
                        <h1>Hola Acordeon Padre </h1>
                        <AccordeonComp />
                    </div>
                </div>
            </React.Fragment>
        )
      }

}
export default Accordeon