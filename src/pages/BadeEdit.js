import React from 'react';
import Badge from '../components/Badge';
//import header from '../imgs/badge-header.svg'
import logo_conf from '../imgs/platziconf-logo.svg'
import '../components/styles/BadgeEdit.css'
import BadgeForm from '../components/BadgeForm'
import api from '../api';
import md5 from 'md5';
import PageLoading from '../components/PageLoading';


class BadgeEdit extends React.Component{
    state={
		loading:true,
		error:null,
        form:{
            firstName:'',
            lastName:'',
            jobTitle:'',
            email:'',
            twitter:'',
		},
    };

	componentDidMount(){
		this.fetchData();
	}
	fetchData = async e =>{
		this.setState({loading:true, error:null});
		try{
			const data= await api.badges.read(
				this.props.match.params.badgeId
			)
			console.log("data a editar "+JSON.stringify(data))
			this.setState({loading:false, form:data})
		}catch(error){
			this.setState({loading:false, error:error})

		}
	}	

    handleChange=(e)=>{
        //const nextForm=this.state.form; //primera forma
		//nextForm[e.target.name]=e.target.value; //primera forma con esto el valor no cambia
	if(e.target.name=='email'){
        const email=e.target.value;
        const hash=md5(email);
        const varUrl=`https://es.gravatar.com/avatar/${hash}?id=identicon`;

		this.setState({
            form:{
                ...this.state.form,
				[e.target.name]:e.target.value,
				avatarUrl:varUrl
            }
            //form:nextForm//primera forma
            /* {
                //[e.target.name]:e.target.value,
            } */
        })
	}else{
		this.setState({
            form:{
                ...this.state.form,
				[e.target.name]:e.target.value,
            }
            //form:nextForm//primera forma
            /* {
                //[e.target.name]:e.target.value,
            } */
        })
	}


	}
	handleSubmit= async (e)=>{
		e.preventDefault();
		this.setState({loading:true, error:null});
		try{
			await api.badges.update(this.props.match.params.badgeId, this.state.form);
			this.setState({loading:false})
			this.props.history.push('/badges');
		}catch(error){
			this.setState({loading:false, error:error})
		}

	}
    render(){
		if(this.state.loading){
			return <PageLoading />
		}
        return(
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <div className="row">
                        <div className="col-6">
                            <img className="imgConf" src={logo_conf} alt="logo"/>
                        </div>
                        <div className="col-5">
                            <h1 className="title-form" > Edit Attendant</h1>
                            <BadgeForm
							onChange={this.handleChange}
							onSubmit={this.handleSubmit}
							formValues={this.state.form}
							error={this.state.error} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 clase_badge pt-5 pr-5" >
                            <Badge
                            firstName={this.state.form.firstName || 'FIRST_NAME'}
                            lastName={this.state.form.lastName || 'LAST_NAME'}
                            jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                            twitter={this.state.form.twitter || 'twitter'}
                            email={this.state.form.email || 'EMAIL'}
							avatarUrl={this.state.form.avatarUrl || "https://los40es00.epimg.net/los40/imagenes/2020/01/08/cinetv/1578441173_946780_1578441736_noticia_normal.jpg"} /> {/*"https://los40es00.epimg.net/los40/imagenes/2020/01/08/cinetv/1578441173_946780_1578441736_noticia_normal.jpg"/>*/}
                        </div>
                        {/* <div className="col-6">
                            <BadgeForm
                            onChange={this.handleChange}
                            formValues={this.state.form}/>
                        </div> */}
                    </div>
                </div>

            </React.Fragment>

        )
    }
}
export default BadgeEdit
