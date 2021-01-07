import React from 'react';
import useClickOutside from 'hooks/useClickOutside';
import SidebarComponent from './Sidebar.component';

const SidebarContainer = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const nodeRef = useClickOutside(showSidebar, () => {
    setShowSidebar(false);
  });

  return (
    <SidebarComponent
      nodeRef={nodeRef}
      sidebarShowing={showSidebar}
      setShowingSidebar={setShowSidebar}
    />
  );
};

export default SidebarContainer;
