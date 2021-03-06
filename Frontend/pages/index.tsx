import type { NextPage } from 'next';
import { useState } from 'react';
import Modal from 'components/foundation/Modal';
import Button from '@styles/extendableElements/Button';
import runServerSideQueries from 'utils/runServerSideQueries';

const Home: NextPage = () => {
  const [showingModal, setShowingModal] = useState(false);

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

export async function getServerSideProps(context: any) {
  return runServerSideQueries(context);
}

export default Home;
