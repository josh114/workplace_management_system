import React from 'react';
import './footer.css';

function Column(props) {
  return (
    <div className='footerColumn'>
      <h2>{props.name}</h2>
      <ul>{props.items}</ul>
    </div>
  );
}

export default Column;
