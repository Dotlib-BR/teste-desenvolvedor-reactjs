import React from 'react';

import './styles.css';

interface CheckboxItemProps {
    id: string
    title: string
}


const CheckboxItem: React.FC<CheckboxItemProps> = ({id, title}) => {
  return (
    <div id='checkbox-container'>
        <input type="checkbox" id={`${id}`} onClick={() => console.log('cliquei')} />
        <label htmlFor={`${id}`}>{title}</label>
    </div>
  );
}

export default CheckboxItem;