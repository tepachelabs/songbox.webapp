import React from 'react';

import SidebarComponent from './Sidebar.component';
import useClickOutside from '../../hooks/useClickOutside';

const SidebarContainer = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const nodeRef = useClickOutside(showSidebar, () => {
    setShowSidebar(false);
  });

  // useEffect(() => {
  //   const clickOutside = (e) => {
  //     if (nodeRef.current.contains(e.target)) {
  //       return;
  //     }

  //     e.stopPropagation();
  //     setShowSidebar(false);
  //   };

  //   document.addEventListener('mousedown', clickOutside, false);

  //   return () => {
  //     document.removeEventListener('mousedown', clickOutside, false);
  //   };
  // }, []);

  return (
    <SidebarComponent
      nodeRef={nodeRef}
      sidebarShowing={showSidebar}
      setShowingSidebar={setShowSidebar}
    />
  );
};

export default SidebarContainer;
