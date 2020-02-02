import React from 'react';

import '../components/styles/AccordeonStyle.css'

const styles={
    active:{
        display:'inherit'
    },
    inactive:{
        display:'none'
    }
}

class AccordeonComp extends React.Component{
    constructor(){
        super();
        this.state={
            data:[
                {
                    id:0,
                    title:"Primero 1",
                    body:"Lorem ipsum dolor sit amet consectetur adipiscing elit mus, tortor fusce vitae nisi morbi vel suspendisse nostra tristique, eu pellentesque senectus mi odio posuere vestibulum. Aliquet sem senectus eros condimentum nisi placerat nunc orci neque nulla, cras leo tempor dictumst fermentum nascetur nullam lobortis vulputate ad scelerisque, nam libero semper convallis mollis non nisl facilisi primis. Pellentesque suspendisse condimentum arcu donec litora potenti luctus semper, ut hac cubilia euismod elementum aliquam nisi etiam mus, taciti fusce tincidunt non habitasse bibendum nibh. Velit enim hendrerit egestas quis sociosqu neque eget ultrices cursus risus, nec magna tincidunt vehicula ad viverra elementum et lectus tempus ornare, feugiat blandit aliquam aenean mi ultricies porttitor dapibus vulputate."
                },
                {
                    id:1,
                    title:"Segundo 2",
                    body:"Felis etiam malesuada posuere nulla ullamcorper venenatis eu tempus, senectus class dis tempor risus justo diam rhoncus, luctus dictumst quis sollicitudin facilisis duis per. Himenaeos sed nullam aptent in etiam pulvinar, convallis cras elementum ligula iaculis, ultrices viverra laoreet est facilisis. Platea pulvinar felis penatibus viverra nostra interdum, mattis risus phasellus quam eget sapien, tellus nascetur hendrerit non gravida."
                },
                {
                    id:2,
                    title:"Tercero 3",
                    body:"Lorem ipsum dolor sit amet consectetur adipiscing elit semper in dignissim, purus ultricies primis congue donec vivamus quis curae potenti tincidunt, euismod bibendum nostra lectus vestibulum dictum dapibus enim sodales. Scelerisque tempus fringilla donec platea dis dictumst, faucibus euismod congue enim netus fermentum mus, cursus condimentum phasellus ligula purus."
                 }
            ],
            active0:false,
            active1:false,
            active2:false,
        };
        
        this.expand=this.expand.bind(this);
    }
    expand(index){
        var collapse=`active${index}`;
        this.setState({
            [collapse]:!this.state[`active${index}`]
        });
    }
   
    
    render(){
        let stateStyle=this.state;
            return(
            <div>
            {this.state.data.map((arreglo, index)=>{
                return(
                        <div  key={index}>
                            <div className="collapsable" >
                                <div className="Accordeon__section-title" onClick={()=>this.expand(index)}>
                                    <p> {arreglo.title}  </p>
                                </div>
                                <div className="body" style={stateStyle[`active${index}`]===true? styles.active:styles.inactive} >
                                    {arreglo.body}
                                </div>
                            </div>
                        </div>

                )
            })}
            </div>
            )
      }
}

export default AccordeonComp