import React from 'react';
import { Button } from 'reactstrap';
import { QUERY_CHORES } from '../utils/queries';
import { useQuery } from '@apollo/client';
import './chores.css';

const Chores = () => {
    // use use Query hook to make query request
    const { data } = useQuery(QUERY_CHORES);
    console.log(data);
    const chores = data?.chores || [];

  return (
    <div className="choreImage">
      <h3 className="font">Chores</h3>
      {chores.map(chore => (
        <div>
        <p>{chore.description}<Button>Add</Button></p>
        </div>
      ))}
    </div>
  );
};

export default Chores;
