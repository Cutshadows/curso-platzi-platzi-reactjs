import React from 'react';
import '../components/styles/BadgeDetails.css';
//import confLogo from '../imgs/platziconf-logo.svg'
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError'
//import Badge from '../components/Badge'
import api from '../api';
//import {Link} from 'react-router-dom'
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends React.Component{
	state={
		loading:true,
		error:null,
		data:undefined,
		modalisOpen:false,
	}
	componentDidMount(){
		this.fetchData()
	}
	fetchData= async()=>{
		this.setState({loading:true, error:null})

		try{
			const data=await api.badges.read(
				this.props.match.params.badgeId
			);
			console.log(data);
			this.setState({loading:false, data:data})
		}catch(error){
			this.setState({loading:false, error:error})

		}
	}
	handleOpenModal=e=>{
		this.setState({
			modalisOpen:true
		})
	 }
	handleCloseModal=e=>{
       this.setState({
		   modalisOpen:false
	   })
	}
	handleDeleteBadge=async e=>{
		this.setState({loading:true, error:null})
		try{
			api.badges.remove(
				this.props.match.params.badgeId
			)
			this.setState({loading:false})
			this.props.history.push('/badges')
		}catch(error){
			this.setState({loading:false, error:error})
		}

	}
    render(){
		if(this.state.loading){
			return <PageLoading />
		}
		if(this.state.error){
			return <PageError error={this.state.error.message}/>
		}
        return(
			<BadgeDetails
			onOpenModal={this.handleOpenModal}
			onCloseModal={this.handleCloseModal}
			modalisOpen={this.state.modalisOpen}
			onDeleteBadge={this.handleDeleteBadge}
			badge={this.state.data}/>
        );
}}


export default BadgeDetailsContainer;
