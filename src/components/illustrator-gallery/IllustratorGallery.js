import React from 'react';
import nutcracker from '../../assets/nutcrackerheartking.png'
import toadstools from '../../assets/wanderingthroughthetoadstools.png'

function IllustratorGallery(props) {
    return (
			<div className='gallery-container'>
				<img
					src={nutcracker}
					alt='nutcracker king art print'
					className='art-print nutcracker'
				/>
				<img
					src={toadstools}
					alt='wandering through the toadstool art print'
					className='art-print toadstools'
				/>
			</div>
		);
}

export default IllustratorGallery;