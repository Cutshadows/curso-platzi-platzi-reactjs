import React from 'react';
import md5 from 'md5';

function Gavatar(props){
	const urlavatar=props.avatar;
	//const hash=md5(email);
	return(
		<img className={props.className} src={urlavatar} />
	);
}
export default Gavatar;
