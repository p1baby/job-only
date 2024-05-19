// home.tsx
import './home.scss'
import { useState } from 'react';
import {Swiper, Circle } from '../../components';

function Home() {
	const [activeYear, setActiveYear] = useState(2005);
  const resetSwiper = () => {};

	return (
		<section className='overlayHome'>
			<article className='content'>
				<header>
					<div className='gradient'></div><h1>Исторические<br></br>даты</h1>
				</header>
					<Circle setActiveYear={setActiveYear} resetSwiper={resetSwiper}/>
				<footer>
					<Swiper activeYear={activeYear}/>
				</footer>
			</article>
		</section>
	);
}

export default Home;
