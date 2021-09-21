import React from 'react';
import { QUERY_CHORES } from '../utils/queries';
import { useQuery } from '@apollo/client';

const Chores = () => {
    // use use Query hook to make query request
    const { data } = useQuery(QUERY_CHORES);

    const chores = data?.chores || [];

  return (
    <div>
      <h3>Chores</h3>
        <div chores={chores} />
          </div>
  );
};

export default Chores;
