import type { NextPage } from 'next';
import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Modal from 'components/foundation/Modal';
import Button from '@styles/extendableElements/Button';

const THINGS_QUERY = gql`
  query THINGS_QUERY {
    things {
      id
      title
    }
  }
`;

const Home: NextPage = () => {
  const [showingModal, setShowingModal] = useState(false);
  const { data, loading, error } = useQuery(THINGS_QUERY, {
    onCompleted: (d) => console.log(d),
    onError: (e) => console.log(e),
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Button
        type="button"
        onClick={() => setShowingModal(!showingModal)}
      >
        Show Modal
      </Button>
      {showingModal && (
        <Modal close={() => setShowingModal(false)}>
          <div>Modal!</div>
        </Modal>
      )}
    </div>
  );
};

export default Home;
