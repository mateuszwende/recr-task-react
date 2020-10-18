import React from 'react';
import { Link } from 'react-router-dom';

import { Person } from '../../types/star-wars';
import { Content, Item } from './style';

interface PersonItemProps extends Partial<Person> {}

const PersonItem: React.FC<PersonItemProps> = ({
  name,
  birth_year,
  gender,
}: PersonItemProps) => {
  return (
    <Item>
      <Content>
        <h3>{name}</h3>
        <p>{birth_year}</p>
        <p>{gender}</p>
        <Link to={`/people/${name}`}>See details</Link>
      </Content>
    </Item>
  );
};

export default PersonItem;
