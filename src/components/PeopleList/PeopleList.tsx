import React from 'react';

import withError from '../../hoc/withError';
import withLoading from '../../hoc/withLoading';
import { Person } from '../../types/star-wars';
import PersonItem from '../PersonItem/PersonItem';
import { List } from './style';

interface ListProps {
  list?: Person[];
}

const PeopleList: React.FC<ListProps> = ({ list }: ListProps) => {
  return (
    <List>
      {list && list.length ? (
        list.map((item) => <PersonItem {...item} key={item.url} />)
      ) : (
        <p>There is no data.</p>
      )}
    </List>
  );
};

export default withError(withLoading(PeopleList));
