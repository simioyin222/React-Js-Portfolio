import React, { useState } from 'react';
import Modal from './modal'; // Import the Modal component
import styles from './interests.module.css';

function Interests() {
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const interests = [
    { name: 'MMA/UFC', content: 'Content about MMA/UFC', images: ['mma1.jpg', 'mma2.jpg'] },
    { name: 'MMA/UFC', content: 'Content about MMA/UFC', images: ['mma1.jpg', 'mma2.jpg'] },
    { name: 'MMA/UFC', content: 'Content about MMA/UFC', images: ['mma1.jpg', 'mma2.jpg'] },
    { name: 'MMA/UFC', content: 'Content about MMA/UFC', images: ['mma1.jpg', 'mma2.jpg'] },
    { name: 'MMA/UFC', content: 'Content about MMA/UFC', images: ['mma1.jpg', 'mma2.jpg'] },
    // Add more interests
  ];

  const handleClick = (interest) => {
    setSelectedInterest(interest);
    setShowModal(true);
  };

  return (
    <div>
      <h4>Interests and Hobbies</h4>
      <div className={styles.bubblesContainer}>
        {interests.map((interest, index) => (
          <div
            key={index}
            className={styles.bubble}
            onClick={() => handleClick(interest)}
          >
            {interest.name}
          </div>
        ))}
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        {selectedInterest && (
          <div>
            <h5>{selectedInterest.name}</h5>
            <p>{selectedInterest.content}</p>
            {selectedInterest.images && selectedInterest.images.map((image, index) => (
              <img key={index} src={image} alt={selectedInterest.name} />
            ))}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Interests;