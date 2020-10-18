import React from 'react';

import { PeopleList, Search } from '../../components';
import { usePeople } from '../../hooks/usePeople';

const HomeView: React.FC = () => {
  const { state, getPeople } = usePeople();

  const searchQuery = async (value: string) => {
    await getPeople(value);
  };

  return (
    <div>
      <Search searchQuery={searchQuery} />
      <PeopleList
        list={state.peopleList}
        isLoading={state.loading}
        error={state.error}
      />
    </div>
  );
};

export default HomeView;
