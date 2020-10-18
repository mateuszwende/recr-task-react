import { useEffect, useState } from 'react';

import { getStarWarsPeople } from '../services/star-wars';
import { Person } from '../types/star-wars';

interface State {
  person: Partial<Person>;
  loading: boolean;
  error?: string;
}

export const usePerson = (id: string) => {
  const [state, setState] = useState<Partial<State>>({
    person: {},
    loading: false,
  });

  useEffect(() => {
    (async () => {
      await getPerson(id);
    })();
  }, [id]);

  const getPerson = async (name: string) => {
    setState({ loading: true });

    try {
      const res = await getStarWarsPeople({ search: name });

      setState({ person: res.data.results[0], loading: false });
    } catch (err) {
      setState({ error: "Something went wrong. Please, try again later." });
      console.error(err);
    }
  };

  return state;
};
