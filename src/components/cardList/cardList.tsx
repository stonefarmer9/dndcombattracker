import React from 'react';
import MainCard from  '../card/mainCard';

const MockData = [
  {
    name: 'Azatoth',
    initiative: 22,
  },
  {
    name: 'Chimera',
    initiative: 14,
  },
  {
    name: 'Long Fang',
    initiative: 27,
  },
  {
    name: 'Orc Chief',
    initiative: 18,
  },
  {
    name: 'Iago',
    initiative: 8,
  },
]

const CardList = () => {
  return(
    <div>
    {
      MockData.map(character => {
        console.log(character);
        return <MainCard
            name={character.name}
            initiative={character.initiative}
            />
      })
    }
    </div>
  )
}

export default CardList
