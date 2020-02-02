import React from 'react';
import ModalComp from './ModalComp'


function DeleteBadgeModal(props){
	return <ModalComp isOpen={props.isOpen} onClose={props.onClose} >
		<div className="DeleteBadgeModal">
			<h1>Are you Sure?</h1>
			<p>You are about to delete this badge.</p>
			<div>
				<button onClick={props.onDeleteBadge} className="btn btn-danger mr-1">Delete</button>
				<button onClick={props.onClose} className="btn btn-primary mr-1">Cancel</button>
			</div>
		</div>
	</ModalComp>
}
export default DeleteBadgeModal
