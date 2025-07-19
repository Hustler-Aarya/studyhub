import React, { useCallback } from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';


const Card = (props) => {
  const navigate = useNavigate();

  const handleJoin = useCallback(() => {
    navigate('/viewcourse'); 
  }, [navigate]);

  return (
    <div className='card'>
      <div className='crd_stl'>
        <h2 className='card_title'>{props.title}</h2>
        <img className='card_image' src={props.image} alt={props.title} />
        <p className='card_about'>{props.about}</p>
        <button className='card_btn' onClick={handleJoin}>
          {props.btn}
        </button>
      </div>
    </div>
  );
};

export default Card;
