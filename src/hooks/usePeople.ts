import { useEffect, useState } from 'react';

import { getStarWarsPeople } from '../services/star-wars';

interface State {
  peopleList: [];
  loading: boolean;
  error?: string;
}

export const usePeople = () => {
  const [state, setState] = useState<Partial<State>>({
    peopleList: [],
    loading: false,
  });

  useEffect(() => {
    (async () => {
      await getPeople();
    })();
  }, []);

  const getPeople = async (search?: string) => {
    setState({ loading: true });

    try {
      const res = await getStarWarsPeople({
        search,
      });

      setState({ peopleList: res.data.results, loading: false });
    } catch (err) {
      setState({ error: "Something went wrong. Please, try again later." });
      console.error(err);
    }
  };

  return {
    state,
    getPeople,
  };
};
