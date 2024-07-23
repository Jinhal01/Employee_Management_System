import React from 'react';
import CardItem from './CardItem';

const Card = ({ employees }) => {
  return (
    
    <div className='card-container'>
      {employees.map(employee => (

        <div className='card' key={employee.id}>
          <CardItem
            firstname={employee.firstname}
            lastname={employee.lastname}
            email={employee.email}
          />
        </div>
      ))}
    </div>
  );
};

export default Card;
