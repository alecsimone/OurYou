import type { NextPage } from 'next';
import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Modal from 'components/foundation/Modal';
import Button from '@styles/extendableElements/Button';
import initializeApollo, { addApolloState } from 'utils/apollo/apolloHandlers';

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
  const { data, loading, error } = useQuery(THINGS_QUERY);
  // eslint-disable-next-line no-console
  console.log({ data, loading, error });

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

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: THINGS_QUERY,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default Home;
