import '../css/ProgressBar.css';
import React from 'react';


const ProgressBar = ({done, color}) => {

	const style = {
		opacity: 1,
		width: `${done}%`,
		// background: '#d12c2c',
		background: color,
	};
		
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{/* {done}% */}
			</div>
		</div>
	)
}

export default ProgressBar;
