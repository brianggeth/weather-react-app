import React from 'react';
import CardTemp from './CardTemp';
import propTypes from 'prop-types';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return <div>
    <button onClick={onClose}> X </button>
    <span>{name}</span>
    <CardTemp label = "Min" value = {min}/>
    <CardTemp label = "Max" value = {max}/>
    
    
    <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather icon" />
    </div>
};


Card.propTypes = {
  max: propTypes.number,
  min: propTypes.number,
  name: propTypes.string,
  img: propTypes.string,
  onClose: propTypes.func,
}
