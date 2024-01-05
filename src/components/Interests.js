import React from 'react';

function Interests() {
  return (
    <div>
      <h4>Interests and Hobbies</h4>
      <ul>
        <li>MMA/UFC</li>
        <li>Video Games</li>
        <li>Working Out</li>
        <li>Anime</li>
        <li>
          <a href="https://www.twitch.tv/tobbdawgg">
            <span className="Streaming"></span> I stream too! Check me out!
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Interests;