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

  const getBubblePosition = (index) => {
    // Define positions for a narrower and lower "W" shape layout
    const positions = [
      { top: '30%', left: '20%' }, // Start of the "W"
      { top: '60%', left: '35%' },
      { top: '30%', left: '50%' },
      { top: '60%', left: '65%' },
      { top: '30%', left: '80%' }  // End of the "W"
    ];
  
    return positions[index % positions.length];
  };

  return (
    <div className={styles.container}>
      <h4>Interests and Hobbies</h4>
      <div className={styles.bubblesContainer}>
        {interests.map((interest, index) => {
          const position = getBubblePosition(index);
          return (
            <div
              key={index}
              className={styles.bubble}
              onClick={() => handleClick(interest)}
              style={{
                animationDelay: `${index * 2}s`,
                top: position.top,
                left: position.left,
              }}
            >
              {interest.name}
            </div>
          );
        })}
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