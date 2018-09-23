import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => (
  <div>
    {robots.map((user, i) => (
      <Card
        key={robots.i}
        id={robots[i].id}
        name={robots[i].name}
        username={robots[i].username}
        email={robots[i].email}
      />
    ))}
  </div>
);

export default CardList;
