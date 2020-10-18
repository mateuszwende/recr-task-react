import React from 'react';
import { useParams } from 'react-router-dom';

import { PersonDetails } from '../../components';
import { usePerson } from '../../hooks/usePerson';
import { Person } from '../../types/star-wars';

interface PersonItemProps extends Partial<Person> {}

interface Params {
  name: string;
}

const PersonView: React.FC<PersonItemProps> = () => {
  const { name } = useParams<Params>();
  const { person, loading, error } = usePerson(name);

  return <PersonDetails person={person} isLoading={loading} error={error} />;
};

export default PersonView;
