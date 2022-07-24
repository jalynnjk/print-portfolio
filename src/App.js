import './App.css';
import Header from './components/header/Header'
import Gallery from './components/gallery/Gallery'
import { Routes, Route } from 'react-router-dom'
import IllustratorGallery from './components/illustrator-gallery/IllustratorGallery.js';

function App() {
  return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/procreate' element={<Gallery />} />
				<Route path='/illustrator' element={<IllustratorGallery />} />
			</Routes>
		</div>
	);
}

export default App;
