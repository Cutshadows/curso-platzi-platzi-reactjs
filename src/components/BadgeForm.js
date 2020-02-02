import React from 'react';
import multimedio from '../imgs/multimedia.svg'
//import ModalComp from './ModalComp';

class BadgeForm extends React.Component{
  /*  constructor(props){
       super(props);
        this.state={
            showModal:true,
        }
        this.handleClick = this.handleClick.bind(this);
    } */
    /* state={
        //jobTitle:'Designer' //inicializa el estado "controlado" con un valor en el input
    } */
   /*  handleChange=(e)=>{
        // console.log({
        //     name:e.target.name,
        //     value:e.target.value
        // });
        this.setState({
            [e.target.name]: e.target.value,
            //firstName: e.target.value,

        })
    } */
    /* handleClick=()=>{
        this.setState({
            showModal:!this.state.showModal
        })
        //console.log(this.state);
    } */

   /*  handleSubmit=(e) =>{
        e.preventDefault(); //esta linea evita que se recargue la pagina por un submit
    } */
    render(){
        return(
            <div>
            <div className="BadgeForm">
                    <form onSubmit={this.props.onSubmit}>
                        <div className="form-group p-3">
                            <label > First Name</label>
                            <input
                            onChange={this.props.onChange}
                            type="text"
                            name="firstName"
                            value={this.props.formValues.firstName}
                            className="form-control" />
                        </div>
                        <div className="form-group p-3">
                            <label > Last Name</label>
                            <input
                            onChange={this.props.onChange}
                            type="text"
                            name="lastName"
                            value={this.props.formValues.lastName}
                            className="form-control" />
                        </div>
                        <div className="form-group line-rect">

                        </div>
                        <div className="form-group p-3">
                            <label > Email</label>
                            <input
                            onChange={this.props.onChange}
                            type="email"
                            name="email"
                            value={this.props.formValues.email}
                            className="form-control" />
                        </div>
                        <div className="form-group p-3">
                            <label > Job Title</label>
                            <input
                            onChange={this.props.onChange}
                            type="text"
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}
                            className="form-control" />
                        </div>
                        <div className="form-group p-3">
                            <label > Twitter</label>
                            <input
                            onChange={this.props.onChange}
                            type="text"
                            name="twitter"
                            value={this.props.formValues.twitter}
                            className="form-control" />
                        </div>
                        <div className="input-group p-5">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupFileAddon01">
                                    <img src={multimedio} width="20px" alt=""/>
                                    </span>
                                </div>
                                <div className="custom-file">
                                <input
                                onChange={this.props.onChange}
                                type="file"
                                name="photo"
                                /* value={this.props.formValues.twitter}  */
                                className="input-file custom-file-input"  aria-describedby="inputGroupFileAddon01" />
                                <label className="custom-file-label" htmlFor="inputGroupFile01">
                                Profile Picture Upload
                                </label>
                            </div>
                        </div>
                        <div className="form-group p-4">
                            <label>
                            <input
                                type="checkbox"
                                name="termnios"
                                className="mr-2"
                                /* value={this.props.formValues.twitter}  */ />
                                I accept the <a href="/">term of service</a> and the <a href="/">privacy policy</a>
                                </label>
                        </div>
                        <div className="form-group p-3">
                        	<button
                            //onClick={this.handleClick}
                                className="btn btn-primary btn-submit"
							>Save
							</button>
							{this.props.error &&(
								<p className="alert alert-danger text-danger mb-3" role="alert">{this.props.error.message}</p>
							)}
                        </div>
                    </form>
            </div>
            {/* <ModalComp isOpen={this.state.showModal} /> */}
            </div>

        )
    }
}

export default BadgeForm
