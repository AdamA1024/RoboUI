import React, { useEffect, useState } from 'react';
import './RoverControl.css';

const RoverControl = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleKeyDown = (event) => {
    setActiveKey(event.key);
    switch (event.key) {
      case 'w':
        moveForward();
        break;
      case 's':
        moveBackward();
        break;
      case 'a':
        turnLeft();
        break;
      case 'd':
        turnRight();
        break;
      default:
        break;
    }
  };

  const handleKeyUp = () => {
    setActiveKey(null);
  };

  const moveForward = () => {
    console.log('Move Forward');
  };

  const moveBackward = () => {
    console.log('Move Backward');
  };

  const turnLeft = () => {
    console.log('Turn Left');
  };

  const turnRight = () => {
    console.log('Turn Right');
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="rover-control">
      <div className="controls-row">
        <button
          className={`control-button ${activeKey === 'w' ? 'active' : ''}`}
          onClick={moveForward}
        >
          W
        </button>
      </div>
      <div className="controls-row">
        <button
          className={`control-button ${activeKey === 'a' ? 'active' : ''}`}
          onClick={turnLeft}
        >
          A
        </button>
        <button
          className={`control-button ${activeKey === 's' ? 'active' : ''}`}
          onClick={moveBackward}
        >
          S
        </button>
        <button
          className={`control-button ${activeKey === 'd' ? 'active' : ''}`}
          onClick={turnRight}
        >
          D
        </button>
      </div>
    </div>
  );
};

export default RoverControl;
