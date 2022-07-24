import React from 'react';
import './galleryStyle.css'
import jukebox from '../../assets/jukebox.png'
import milkshake from '../../assets/milkshake.png'
import sunglasses from '../../assets/rosetintedglasses.png'
import rollerskates from '../../assets/rollerskates.png'

function Gallery(props) {
    return (
		
			<div className='gallery-container'>
				<img
					src={sunglasses}
					alt='retro jukebox art print'
					className='art-print sunglasses'
				/>
				<img
					src={jukebox}
					alt='retro milkshake art print'
					className='art-print jukebox'
				/>
				<img
					src={milkshake}
					alt='retro sunglasses art print'
					className='art-print milkshake'
				/>
				<img
					src={rollerskates}
					alt='retro rollerskates art print'
					className='art-print rollerskates'
				/>
			</div>
		);
}

export default Gallery;