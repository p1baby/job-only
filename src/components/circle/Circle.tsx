import { useState } from 'react';
import './circle.scss';

interface CircleProps {
  setActiveYear: (year: number) => void;
  resetSwiper: () => void;
}

const Circle = ({ setActiveYear, resetSwiper }: CircleProps) => {
  const [activeButton, setActiveButton] = useState(2005);
  
  const [yearRange, setYearRange] = useState({ start: 2005, end: 2009 });

  const handleButtonClick = (startYear: number) => {
    setActiveButton(startYear);
    setActiveYear(startYear);
    setYearRange({ start: startYear, end: startYear + 4 });
    resetSwiper();
  }

  return (
    <section className='circleSec'>
      <img alt='circle' src='/Ellipse304.svg' />
      <div className='numbers'>
        <p><span className='firNum'>{yearRange.start}</span><span className='secNum'>{yearRange.end}</span></p>
      </div>
      <div className='circle'>
        <button 
          onClick={() => handleButtonClick(2005)}
          className={activeButton === 2005 ? 'active' : ''}
        >
          {activeButton === 2005 ? <span className='number'>1</span> : <img alt='circle' src='/EllipseBut.svg'/>}
        </button>
        <button 
          onClick={() => handleButtonClick(2010)}
          className={activeButton === 2010 ? 'active' : ''}
        >
          {activeButton === 2010 ? <span className='number'>2</span> : <img alt='circle' src='/EllipseBut.svg'/>}
        </button>
        <button 
          onClick={() => handleButtonClick(2015)}
          className={activeButton === 2015 ? 'active' : ''}
        >
          {activeButton === 2015 ? <span className='number'>3</span> : <img alt='circle' src='/EllipseBut.svg'/>}
        </button>
        <button 
          onClick={() => handleButtonClick(2020)}
          className={activeButton === 2020 ? 'active' : ''}
        >
          {activeButton === 2020 ? <span className='number'>4</span> : <img alt='circle' src='/EllipseBut.svg'/>}
        </button>
      </div>
    </section>
  )
}

export default Circle
