import type { NextPage } from 'next';
import { useState } from 'react';
import Modal from 'components/foundation/Modal';
import Button from '@styles/extendableElements/Button';

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
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === 'Space') {
            setShowingModal(!showingModal);
          }
        }}
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
