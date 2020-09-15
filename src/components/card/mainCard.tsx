import React from 'react';
import { Badge, Card } from 'react-bootstrap';

interface CharacterObject {
    name: string,
    initiative: number
}

const MainCard = (props: CharacterObject) => {
  console.log(props);
  return (
    <Card style={{ width: '36rem'}}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Badge variant="primary" style={{ borderRadius: '50%'}}>{props.initiative}</Badge>
      </Card.Body>
    </Card>
  )
}


export default MainCard;
