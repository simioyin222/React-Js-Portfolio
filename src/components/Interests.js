import React, { useState } from 'react';
import styles from './interests.module.css';

function Interests() {
  const [selectedInterest, setSelectedInterest] = useState(null);

  const interests = [
    { name: 'MMA/UFC', content: 'Content about MMA/UFC' },
    { name: 'Video Games', content: 'Content about Video Games' },
    { name: 'Working Out', content: 'Content about Working Out' },
    { name: 'Anime', content: 'Content about Anime' },
    { name: 'Streaming', content: 'Check out my streaming channel!', url: 'https://www.twitch.tv/tobbdawgg' },
  ];

  const handleClick = (interest) => {
    setSelectedInterest(interest);
  };

  return (
    <div className={styles.container}>
      <h4>Interests and Hobbies</h4>
      <div className={styles.bubblesContainer}>
        {interests.map((interest, index) => (
          <div
            key={index}
            className={styles.bubble}
            onClick={() => handleClick(interest)}
            style={{
              animationDelay: `${index * 2}s`, // to create staggered animation effect
              top: `${10 + index * 15}%`, // to scatter the bubbles vertically
              left: `${(index % 3) * 30 + 10}%`, // to scatter the bubbles horizontally
            }}
          >
            {interest.name}
          </div>
        ))}
      </div>

      {selectedInterest && (
        <div className={styles.detailView}>
          <h5>{selectedInterest.name}</h5>
          <p>{selectedInterest.content}</p>
          {selectedInterest.url && <a href={selectedInterest.url} target="_blank" rel="noopener noreferrer">Visit</a>}
        </div>
      )}
    </div>
  );
}

export default Interests;