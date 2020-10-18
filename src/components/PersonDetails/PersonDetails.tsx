import React from 'react';

import withError from '../../hoc/withError';
import withLoading from '../../hoc/withLoading';
import { Person } from '../../types/star-wars';
import { Content, Item, Text } from './style';

interface PersonItemProps {
  person?: Partial<Person>;
}

const PersonDetails: React.FC<PersonItemProps> = ({
  person,
}: PersonItemProps) => {
  return (
    <Item>
      <h3>{person?.name}</h3>
      <Content>
        <Text>
          Birth year: <b>{person?.birth_year}</b>
        </Text>
        <Text>
          Gender: <b>{person?.gender}</b>
        </Text>
        <Text>
          Eye color: <b>{person?.eye_color}</b>
        </Text>
        <Text>
          Hair color: <b>{person?.hair_color}</b>
        </Text>
        <Text>
          Skin color: <b>{person?.skin_color}</b>
        </Text>
        <Text>
          Mass: <b>{person?.mass}</b>
        </Text>
      </Content>
    </Item>
  );
};

export default withError(withLoading(PersonDetails));
