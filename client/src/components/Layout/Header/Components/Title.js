import React from 'react';

const Title = ({ style, title }) => {
  return (
    <span className={style}>
      {title ? title : 'PT Dashboard'}
    </span>
  )
}

export default Title
