/* eslint-disable no-mixed-spaces-and-tabs */
import './swiper.scss'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

interface SwipProps {
	activeYear: number;
  }

  const SwiperComponent = ({ activeYear }: SwipProps) => {
	const swipesCard = [
		{year: '2005', slides: [
			{id: '1', year: '2005', content: '14 февраля — создание YouTube' },
			{id: '2', year: '2006', content: '24 августа — Плутон лишён статуса планеты' },
			{id: '3', year: '2007', content: '9 января — компания Apple представила iPhone первого поколения' },
			{id: '4', year: '2008', content: '10 сентября — запуск Большого адронного коллайдера' },
			{id: '5', year: '2009', content: '22 октября — выпуск Windows 7' },
		]},
		{year: '2010', slides: [
			{id: '1', year: '2010', content: '12—28 февраля — XXI Зимние Олимпийские игры (Ванкувер, Канада)' },
			{id: '2', year: '2011', content: '31 октября — родился семимиллиардный житель Земли' },
			{id: '3', year: '2012', content: '8 июня — 1 июля — Чемпионат Европы по футболу 2012 (Польша/Украина)' },
			{id: '4', year: '2013', content: '15 февраля — падение Челябинского метеорита' },
			{id: '5', year: '2014', content: '12 октября — первое в истории России Гран-при Формулы-1 в Сочи' },
		]},
		{year: '2015', slides: [
			{id: '1', year: '2015', content: '29 июля — выпуск Windows 10' },
			{id: '2', year: '2016', content: '5—21 августа — XXXI летние Олимпийские игры (Рио-де-Жанейро, Бразилия)' },
			{id: '3', year: '2017', content: '30 марта — впервые в истории повторно использована космическая ракета-носитель (Falcon 9)' },
			{id: '4', year: '2018', content: '20 сентября — первая видеокарта от Nvidia с технологией RTX' },
			{id: '5', year: '2019', content: '31 декабря — начало пандемии COVID-19, вызванной вспышкой инфекции SARS-CoV-2 в Китае' },
		]},
		{year: '2020', slides: [
			{id: '1', year: '2020', content: '30 мая — в США состоялся запуск первого частного пилотируемого космического корабля' },
			{id: '2', year: '2021', content: '5 октября — выпуск Windows 11' },
			{id: '3', year: '2022', content: '15 ноября — ООН сообщила, что население Земли достигло 8 млрд человек' },
			{id: '4', year: '2023', content: '5 мая — ВОЗ объявила о том, что пандемия COVID-19 больше не является мировой чрезвычайной ситуацией' },
			{id: '5', year: '2024', content: '22 марта — теракт в «Крокус Сити Холле»' },
		]},
	];

	const activeSlides = swipesCard.find(swipe => swipe.year === activeYear.toString())?.slides || [];
	
  return (
    <>
        <Swiper
            slidesPerView={3}
            spaceBetween={80}
            navigation={{
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
				hideOnClick: true,
				disabledClass: 'swiper-button-disabled',
			}}
			  pagination={{
				type: 'fraction',
			  }}
			  modules={[Navigation, Pagination]}
			  className="mySwiper"
			>
			{activeSlides.map((slide) => (
			<SwiperSlide key={slide.id}>
				<div className='card'>
				    <h2>{slide.year}</h2>
					<p>{slide.content}</p>
				</div>
			</SwiperSlide>
			))}
			<div className="swiper-button-next"></div><div className="swiper-button-prev"></div>
		</Swiper>
    </>
  )
}

export default SwiperComponent
