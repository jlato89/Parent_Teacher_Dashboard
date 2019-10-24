import React from 'react';
import './MenuBtn-module.css';

function MenuBtn(props) {
  return (
    <div className='item'>
      <a href={props.link}>{props.name}</a>
    </div>
  );
}

export default MenuBtn;
