import React from 'react';
import './ExploreContainer.css';

const ExploreContainer: React.FC = () => {
  return (
    <div id="container">
      <h1 className="text-3xl font-bold underline bg-red-800">Hello world!</h1>
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
