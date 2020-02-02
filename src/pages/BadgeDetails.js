import React from 'react';
import '../components/styles/BadgeDetails.css';
import confLogo from '../imgs/platziconf-logo.svg'
import Badge from '../components/Badge'
import {Link} from 'react-router-dom'
//import ModalComp from '../components/ModalComp'
import DeleteBadgeModal from '../components/DeleteBadgeModal';


function useIncreaseCount(max){
	const [count, setCount]= React.useState(0);

	if(count > max){
		setCount(0)
	}
	return [count, setCount]

}

function BadgeDetails(props){
	const [count, setCount]=useIncreaseCount(4); //utilizando hooks
	//componente funcional no tiene manejo de estado
	const badge=props.badge;
		return(
			<div>
			<div className="BadgeDetails_hero">
				<div className="container">
					<div className="row">
						<div className="col-6">
							<img src={confLogo} alt="Logo de la Conferencia"/>
						</div>
						<div className="col-6 BadgeDetails_hero-attendant-name">
							<h1> {badge.firstName} {badge.lastName}</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col">
						<Badge
						firstName={badge.firstName}
						lastName={badge.lastName}
						email={badge.email}
						twitter={badge.twitter}
						jobTitle={badge.jobTitle}/>
					</div>
					<div className="col">
						<h2>Actions</h2>
						<div>
							<div>
							<button onClick={()=>{
								setCount(count+1)//no estamos usando el setState de la clase estamos usando el hook de useState
							}} className="btn btn-primary">
								Increase Count {count}
							</button>
							    <Link
							    className="btn btn-primary mb-4"
								to={`/badges/${badge.id}/edit`}>Edit
								</Link>
							</div>
						</div>
						<div>
							<button onClick={props.onOpenModal} className="btn btn-danger mr-4" >Delete</button>
							<DeleteBadgeModal
							isOpen={props.modalisOpen}
							onClose={props.onCloseModal}
							onDeleteBadge={props.onDeleteBadge} />
						</div>
					</div>
				</div>
			</div>
		</div>

		);
}
export default BadgeDetails;
