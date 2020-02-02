import React from 'react';
import ReactDOM from 'react-dom';

import '../components/styles/ModalStyle.css'

function ModalComp(props){
	if(!props.isOpen){
		return null;
	}
    return ReactDOM.createPortal(
		<div className="Modal_div">
		<div className="Modal_container">
			<button onClick={props.onClose} className="Modal__close-button">
				X
			</button>
			{props.children}
		</div>
	</div>,
        document.getElementById('modal')
        )
}
export default ModalComp;
/*
class ModalComp extends React.Component{
    constructor(props){
        super(props);

        console.log("props que pasa para el modal"+this.props.isOpen)
    }
    render(){
        //const showHiddenmodal=this.props.isOpen?"modal d-block":"modal d-none";
        console.log("props que pasa para el modal"+this.props.isOpen)
        return(
            <div className="Modal_div" hidden={this.props.isOpen}>
                <div className="Modal_dialog">
                    <div className="close-container">
                            <button
                            className="btn btn btn-block  button-close">
                                X
                            </button>
                    </div>
                    <div className="Body_modal">
                        <div className="modal-title">
                            <label> Are you sure ? </label>
                        </div>
                        <div className="modal-body">
                            <label className="content"> You are about delete Julian Rubio from the Conf</label>
                        </div>
                        <div className="Modal_buttonDiv">
                            <button className="btn btn-danger m-1 button-options-left float-left">
                            Delete
                            </button>
                            <button className="btn btn-success m-1 button-options-right float-right">
                            Cancel
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default ModalComp */
