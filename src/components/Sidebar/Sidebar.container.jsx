import React, { useEffect, useState } from 'react';

import SidebarComponent from './Sidebar.component';

const SidebarContainer = () => {
  const nodeRef = React.useRef();

  const [sidebar, setShowingSidebar] = useState(false);

  useEffect(() => {
    const clickOutside = (e) => {
      if (nodeRef.current.contains(e.target)) {
        return;
      }

      e.stopPropagation();
      setShowingSidebar(false);
    };

    document.addEventListener('mousedown', clickOutside, false);

    return () => {
      document.removeEventListener('mousedown', clickOutside, false);
    };
  }, []);

  return (
    <SidebarComponent
      nodeRef={nodeRef}
      sidebarShowing={sidebar}
      setShowingSidebar={setShowingSidebar}
    />
  );
};

export default SidebarContainer;
