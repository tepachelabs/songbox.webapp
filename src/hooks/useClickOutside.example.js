import React from 'react';
import useClickOutside from './useClickOutside';

const UseClickOutsideExample = () => {
  const [showElement, setShowElement] = React.useState(false);
  const nodeRef = useClickOutside(showElement, () => {
    setShowElement(false);
  });

  return (
    <div>
      <div>
        <button data-testid="toggle-button" type="button" onClick={() => setShowElement(!showElement)}>toggle</button>
        <div data-testid="toggle-element" ref={nodeRef} className={showElement ? 'active' : 'hide'} />
      </div>
      <div>
        <button type="button">outside</button>
      </div>
    </div>
  );
};

export default UseClickOutsideExample;
